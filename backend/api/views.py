import json
import requests
from django.contrib.auth import get_user_model, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

User = get_user_model()

@csrf_exempt
def google_signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        token = data.get("token")

        # Verify Google Token
        google_response = requests.get(
            f"https://oauth2.googleapis.com/tokeninfo?id_token={token}"
        ).json()

        if "email" not in google_response:
            return JsonResponse({"error": "Invalid token"}, status=400)

        email = google_response["email"]
        first_name = google_response.get("given_name", "")
        last_name = google_response.get("family_name", "")

        # Check if user exists
        user, created = User.objects.get_or_create(email=email, defaults={
            "first_name": first_name,
            "last_name": last_name,
            "username": email.split("@")[0]
        })


        # Log in user and create session
        login(request, user)

        return JsonResponse({"message": "Signup successful"})

import json
import traceback  # Add at top of file
from django.contrib.auth import get_user_model, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from datetime import datetime, timezone  # Correct import for UTC handling

User = get_user_model()


@csrf_exempt
def google_signup(request):
    if request.method == "POST":
        try:
            # Debug raw request body
            raw_body = request.body
            print(f"Raw request body: {raw_body}")

            # Parse JSON with error handling
            try:
                data = json.loads(raw_body.decode('utf-8'))
            except json.JSONDecodeError as e:
                print(f"JSON Error: {str(e)}")
                return JsonResponse({"error": "Invalid JSON format"}, status=400)

            # Extract token
            token = data.get("token")
            print(f"Extracted token: {token[:10]}...")  # Log first 10 chars for security

            if not token:
                return JsonResponse({"error": "No token provided"}, status=400)

            # Verify token
            try:
                id_info = id_token.verify_oauth2_token(
                    token,
                    google_requests.Request(),
                    settings.GOOGLE_OAUTH_CLIENT_ID
                )
            except ValueError as e:
                print(f"Token Verification Error: {str(e)}")
                return JsonResponse({"error": "Invalid token"}, status=400)

            # Check token expiration
            expiry_timestamp = id_info.get("exp")
            if expiry_timestamp and datetime.now(timezone.utc).timestamp() > expiry_timestamp:
                return JsonResponse({"error": "Expired token"}, status=401)

            # Extract email
            email = id_info.get('email')
            if not email:
                return JsonResponse({"error": "Email not found in token"}, status=400)
            username = email.split('@')[0]

            counter = 1
            while User.objects.filter(username=username).exists():
                username = f"{email.split('@')[0]}_{counter}"
                counter += 1

            # Create/update user
            user, created = User.objects.get_or_create(
                username=username,
                email=email,
                defaults={
                    "first_name": id_info.get('given_name', ''),
                    "last_name": id_info.get('family_name', ''),
                }
            )
            user.backend = 'django.contrib.auth.backends.ModelBackend'


            login(request, user)
            return JsonResponse({
                "status": "success",
                "user": {"email": email}
            })

        except Exception as e:
            traceback.print_exc()  # Logs full traceback
            return JsonResponse({"error": "Internal server error"}, status=500)

    return JsonResponse({"error": "Method not allowed"}, status=405)
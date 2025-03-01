from django.urls import path
from .views import google_signup

urlpatterns = [
    path('auth/google-signup/', google_signup,name='google-signup'),

]
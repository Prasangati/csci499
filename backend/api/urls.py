from django.urls import path
from .views import google_signup, signup, authcontext

urlpatterns = [
    path('auth/google-signup/', google_signup,name='google-signup'),
    path('auth/signup/', signup, name='signup'),
    path('auth/me/', authcontext, name='auth-context'),

]
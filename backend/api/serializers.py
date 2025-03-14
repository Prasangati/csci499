# serializers.py (create this file if it doesn't exist)
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(
        required=True,
        error_messages={
            'required': 'Email is required',
            'invalid': 'Enter a valid email address'
        }
    )
    password = serializers.CharField(
        required=True,
        min_length=8,
        error_messages={
            'required': 'Password is required',
            'min_length': 'Password must be at least 8 characters'
        }
    )


class SignupSerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        required=True,
        write_only=True,
        error_messages={
            'required': 'Full name is required',
            'blank': 'Full name cannot be empty'
        }
    )
    password = serializers.CharField(
        required=True,
        write_only=True,
        min_length=8,
        error_messages={
            'min_length': 'Password must be at least 8 characters',
            'required': 'Password is required'
        }
    )

    class Meta:
        model = get_user_model()
        fields = ['email', 'name', 'password']
        extra_kwargs = {
            'email': {
                'required': True,
                'error_messages': {'required': 'Email is required'}
            }
        }

    def validate_email(self, value):
        if get_user_model().objects.filter(email=value).exists():
            raise ValidationError("Email already exists")
        return value

    def validate(self, data):
        # Clean and validate name
        raw_name = data['name'].strip()

        if not raw_name:
            raise ValidationError({'name': 'Full name cannot be empty'})

        # Split name into first/last names
        name_parts = raw_name.split(' ', 1)
        data['first_name'] = name_parts[0]
        data['last_name'] = name_parts[1] if len(name_parts) > 1 else ''

        # Ensure first name is valid
        if not data['first_name']:
            raise ValidationError({'name': 'First name cannot be empty'})

        return data
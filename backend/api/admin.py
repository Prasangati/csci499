from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from api.models import CustomUser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin



class UserAdmin(BaseUserAdmin):
    ordering = ('email',)

admin.site.register(CustomUser, UserAdmin)
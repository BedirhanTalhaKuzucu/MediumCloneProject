from django.contrib import admin

from users.models import UserProfile, Following
from django.contrib.auth.models import User


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'profile_photo', 'last_update',)


# Register your models here.
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Following)

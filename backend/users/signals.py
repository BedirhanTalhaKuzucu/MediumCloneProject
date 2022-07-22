from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from .models import UserProfile


@receiver(post_save, sender=User)
def create_UserProfil(sender, instance=None, created=False, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
        print("hello")
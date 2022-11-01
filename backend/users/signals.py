from django.contrib.auth.models import User
from django.db.models.signals import post_save,post_delete
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from .models import UserProfile


@receiver(post_save, sender=User)
def create_UserProfil(sender, instance=None, created=False, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
        print("hello")


@receiver(post_delete, sender=UserProfile)
def delete_profile(sender,instance,**kwargs):
    users=User.objects.all()
    for user in users:
        if user == instance.user:
            user.delete()
            print(user,'delete')
            

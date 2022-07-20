import os
import random

from django.conf import settings
os.environ['DJANGO_SETTINGS_MODULE'] = 'main.settings.base'
import django
django.setup()
import secrets
from users.models import UserProfile
from django.contrib.auth.models import User
from faker import Faker

def set_user():
    fake=Faker(['en_US']) 
    first_name=fake.first_name()
    last_name=fake.last_name()
    username=f'{first_name.lower()}_{last_name.lower()}'
    email = f'{last_name}@{fake.domain_name()}'
    is_staff = fake.boolean(chance_of_getting_true=5)

    user_check = User.objects.filter(username=username)
    while user_check.exists():
        username = username + str(random.randrange(1,99))
        user_check = User.objects.filter(username=username)



    user=User(
        first_name=first_name,
        last_name=last_name,
        username=username,
        email=email,
        is_staff=is_staff
    )
    print(user)
    user.save()

    short_bio=fake.sentence(nb_words=10)
    profile_photo=fake.image_url()
    about_text=fake.paragraph(nb_sentences=5)
    about_photo=fake.image_url()
    print(user,short_bio)

    user_profile=UserProfile(
        user=user,
        short_bio=short_bio,
        profile_photo=profile_photo,
        about_text=about_text,
        about_photo=about_photo,
    )
    user_profile.save()



        
   








from scripts.fake import set_user
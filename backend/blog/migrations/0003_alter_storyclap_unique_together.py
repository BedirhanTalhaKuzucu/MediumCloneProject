# Generated by Django 4.0.6 on 2022-08-04 18:12

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0002_alter_savedstories_story_alter_savedstories_user_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='storyclap',
            unique_together={('user', 'story')},
        ),
    ]

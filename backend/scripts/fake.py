from blog.models import Story, Tag, Comment, StoryClap, CommentClap
from faker import Faker
from django.contrib.auth.models import User
from users.models import UserProfile
import secrets
import django
import os
import random

from django.conf import settings

os.environ['DJANGO_SETTINGS_MODULE'] = 'main.settings.base'
django.setup()


users = []


def set_user():
    fake = Faker(['en_US'])
    first_name = fake.first_name()
    last_name = fake.last_name()
    username = f'{first_name.lower()}_{last_name.lower()}'
    email = f'{last_name}@{fake.domain_name()}'
    is_staff = fake.boolean(chance_of_getting_true=5)

    user_check = User.objects.filter(username=username)
    while user_check.exists():
        username = username + str(random.randrange(1, 99))
        user_check = User.objects.filter(username=username)

    user = User(
        first_name=first_name,
        last_name=last_name,
        username=username,
        email=email,
        is_staff=is_staff
    )
    print(user)
    user.save()
    users.append(user)

# def user_profile():
#     fake=Faker(['en_US'])

#     user=secrets.choice(users)
#     short_bio=fake.sentence(nb_words=10)
#     about_text=fake.paragraph(nb_sentences=5)
#     about_photo=fake.image_url()
#     print(user,short_bio)

#     user_profile=UserProfile(
#         user=user,
#         short_bio=short_bio,
#         about_text=about_text,
#         about_photo=about_photo,
#     )
#     user_profile.save()


def set_tag():
    fake = Faker(['en_US'])

    tag_name = fake.random_element(elements=(
        'Mindfulness',
        'Art',
        'Science',
        'Books',
        'Creativity',
        'Mental Health',
        'Programming'))

    tag = Tag(
        tag_name=tag_name
    )
    tag.save()


stories = []


def set_story():
    fake = Faker(['en_US'])

    user = secrets.choice(users)
    title = fake.sentence(nb_words=3, variable_nb_words=False)
    content = fake.paragraph(nb_sentences=5, variable_nb_sentences=False)
    status = fake.random_element(elements=("Published", "Draft"))

    story = Story(
        user=user,
        title=title,
        content=content,
        status=status
    )
    story.save()
    stories.append(story)


comments = []


def set_comment():
    fake = Faker(['en_US'])

    user = secrets.choice(users)
    story = secrets.choice(stories)
    content = fake.paragraph(nb_sentences=2, variable_nb_sentences=False)

    comment = Comment(
        user=user,
        story=story,
        content=content
    )
    comment.save()
    comments.append(comment)


def set_clap():
    fake = Faker(['en_US'])

    user = secrets.choice(users)
    story = secrets.choice(stories)
    comment = secrets.choice(comments)

    story_clap = StoryClap(
        user=user,
        story=story
    )
    story_clap.save()

    comment_clap = CommentClap(
        user=user,
        comment=comment
    )
    comment_clap.save()


def recording_data():
    for _ in range(1, 20):
        set_user()
        # user_profile()
    for _ in range(1, 8):
        set_tag()
    for _ in range(0, 50):
        set_story()
    for _ in range(0, 150):
        set_comment()
    for _ in range(1, 100):
        set_clap()


# from scripts.fake import set_user,set_story,set_comment,set_clap,recording_data

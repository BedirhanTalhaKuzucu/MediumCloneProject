from importlib.metadata import requires
from os import read
from pprint import pprint
from rest_framework import serializers, validators
from django.contrib.auth.models import User
from blog.serializers import StorySaveSerializer
from blog.serializers import StorySerializer
from blog.models import TagFollower

from blog.models import Tag
from .models import UserProfile, Following
from django.contrib.auth.password_validation import validate_password
# from dj_rest_auth.serializers import TokenSerializer, LoginSerializer, JWTSerializer
from rest_framework.authtoken.models import Token


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[validators.UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(
        write_only=True,
        # required=True,
        validators=[validate_password],
        style={"input_type": "password"}
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={"input_type": "password"}
    )
    # username = serializers.CharField(
    #     required=False,
    #     # unique=False,

    # )
    # username = serializers.IntegerField(source="id", required=False)

    class Meta:
        model = User
        fields = (
            # 'username',
            "email",
            "first_name",
            "last_name",
            "password",
            "password2"
        )

    def create(self, validated_data):
        password = validated_data.pop("password")
        validated_data.pop("password2")
        validated_data['username'] = validated_data['email']
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def validate(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError(
                {"password": "Password didn't match...."}
            )
        return data


class CustomTokenSerializer(serializers.ModelSerializer):
    userInfo = serializers.SerializerMethodField()
    # user = serializers.StringRelatedField()

    class Meta:
        model = Token
        fields = (
            "key",
            "userInfo",
            # "user",
        )

    def get_userInfo(self, obj):
        profileInfo = UserProfile.objects.filter(user=obj.user).first()
        context = {
            "profileInfoId": profileInfo.id,
            "first_name": obj.user.first_name,
            "last_name": obj.user.last_name,
            "email": obj.user.email,
        }
        return context


class FollowingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Following
        fields = (
            "id",
            "followed"
        )


class FollowingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Following
        fields = (
            "id",
            "followed"
        )


class FollowedTopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TagFollower
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    followed_user = FollowingSerializer(many=True, read_only=True)
    followed_topics = FollowedTopicsSerializer(many=True, read_only=True)
    user_stories = StorySerializer(many=True, read_only=True)
    user_stories_count = serializers.ReadOnlyField(source='user_stories.count')
    saved_stories = StorySaveSerializer(many=True, read_only=True)
    saved_stories_count = serializers.ReadOnlyField(
        source='saved_stories.count')

    class Meta:
        model = User
        fields = (
            'id',
            "username",
            "first_name",
            "last_name",
            "email",
            "followed_user",
            'followed_topics',
            'user_stories',
            'user_stories_count',
            'saved_stories_count',
            'saved_stories',
        )
    # def get_followed_user(self, obj):
    #     return obj.followed_user.all().values('id',"followed")


class UserProfileSerializer(serializers.ModelSerializer):
    # user_detail = serializers.HyperlinkedIdentityField(view_name='user-detail')
    # user = UserSerializer(read_only=True, source="user-detail")
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = (
            # 'user_detail',
            'id',
            'name',
            'short_bio',
            'profile_photo',
            'about_text',
            'about_photo',
            'user',
            # 'user-detail',
        )


class AboutYouSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = (
            'id',
            'user',
            'name',
            'short_bio',
            'profile_photo',
            'about_text',
            'about_photo',
        )

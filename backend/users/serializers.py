from importlib.metadata import requires
from os import read
from pickletools import read_floatnl
from pprint import pprint
import profile
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

        request = self.context.get('request')
        img = profileInfo.profile_photo.url
        img = request.build_absolute_uri(img)

        context = {
            'userId': obj.user.id,
            "profileInfoId": profileInfo.id,
            "image": img,
            "first_name": obj.user.first_name,
            "last_name": obj.user.last_name,
            "email": obj.user.email,
        }
        return context


class FollowingSerializer(serializers.ModelSerializer):

    follower = serializers.IntegerField(source="user.id",  required=False)
    followedDetails = serializers.SerializerMethodField()

    class Meta:
        model = Following
        fields = (
            "follower",
            "followed",
            "followedDetails",
        )

    def get_followedDetails(self, obj):
        followedInfo = UserProfile.objects.filter(user=obj.followed).first()

        request = self.context.get('request')
        img = followedInfo.profile_photo.url
        img = request.build_absolute_uri(img)

        name = followedInfo.user.first_name + followedInfo.user.last_name
        bio = followedInfo.short_bio
        email = followedInfo.user.email
        followedCount = Following.objects.filter(followed=obj.followed).count()

        context = {
            'name': name,
            "bio": bio,
            "image": img,
            "email": email,
            "followedCount": followedCount,
        }
        return context

    def create(self, validated_data):
        follower = self.context.get("request").user
        validated_data['follower'] = follower
        saved = Following.objects.create(**validated_data)
        return saved


class FollowedTopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TagFollower
        fields = ('tag', 'user',)


class UserSerializer(serializers.ModelSerializer):
    followed_user = FollowingSerializer(many=True, read_only=True)
    # followed_topics = FollowedTopicsSerializer(many=True, read_only=True)
    followed_topics = serializers.StringRelatedField(many=True)
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


class UserProfileSerializer(serializers.ModelSerializer):
    user_detail = serializers.HyperlinkedIdentityField(view_name='user-detail')
    # user = UserSerializer(read_only=True, source="user-detail")
    user = UserSerializer()

    class Meta:
        model = UserProfile

        fields = (
            'user_detail',
            'user',
            'id',
            'name',
            'short_bio',
            'profile_photo',
            'about_text',
            'about_photo',
        )


class UserProfileSettingSerializer(serializers.ModelSerializer):

    profile_photo = serializers.ImageField(read_only=True)

    class Meta:
        model = UserProfile
        fields = (
            "short_bio",
            "profile_photo",
        )


class UserSettingSerializer(serializers.ModelSerializer):

    userfor = UserProfileSettingSerializer()

    class Meta:
        model = User
        fields = (
            'id',
            "username",
            "first_name",
            "last_name",
            "userfor",
            'email',
        )

    def update(self, instance, validated_data):

        userProfilUpdated = validated_data.pop('userfor')

        userProfil = UserProfile.objects.get(user=instance.id)
        userProfil.short_bio = userProfilUpdated["short_bio"]
        # userProfil.profile_photo = userProfilUpdated["profile_photo"]

        userProfil.save()

        instance.username = validated_data["username"]
        instance.first_name = validated_data["first_name"]
        instance.last_name = validated_data["last_name"]
        instance.email = validated_data["email"]
        instance.save()

        return instance


class UserProfileImageUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = (
            "profile_photo",
        )

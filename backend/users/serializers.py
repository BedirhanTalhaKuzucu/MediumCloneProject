from importlib.metadata import requires
from os import read
from rest_framework import serializers, validators
from django.contrib.auth.models import User
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
        context = {
            "first_name" : obj.user.first_name,
            "last_name": obj.user.last_name,
            "email": obj.user.email,
        }
        return  context

class FollowingSerializer(serializers.ModelSerializer):

    class Meta:
        model= Following
        fields=(
            "id",
            "followed"
        )


class UserSerializer(serializers.ModelSerializer):

    # followed_user=serializers.SerializerMethodField('get_followed_user')
    followed_user = FollowingSerializer(many=True, read_only=True )

    class Meta:
        model=User
        fields=(
            'id',
            "username",
            "first_name" ,
            "last_name",
            "email",
            "followed_user",
        )
    # def get_followed_user(self, obj):
    #     return obj.followed_user.all().values('id',"followed")

class UserProfileSerializer(serializers.ModelSerializer):
    user_detail=serializers.HyperlinkedIdentityField(view_name='user-detail')
    user=UserSerializer()
    class Meta:
        model = UserProfile
        fields =(
            'user_detail',
            'user',
            # 'id',
            'name',
            'short_bio',
            'profile_photo',
            'about_text',
            'about_photo',
        )

       
class AboutYouSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields =(
            'id',
            'user',
            'name',
            'short_bio',
            'profile_photo',
            'about_text',
            'about_photo',
        )
           
    
    





from rest_framework import serializers
from .models import Story
from users.models import UserProfile
import pandas as pd


class StorySerializer(serializers.ModelSerializer):
    creatorInfo = serializers.SerializerMethodField('get_creatorInfo')
    tags=serializers.SerializerMethodField('get_tags')
    class Meta:
        model = Story
        fields = (
            "id",
            "creatorInfo",
            "title",
            "content",
            "image",
            "tags",
            "publish_date",
        )
    
    def get_tags(self,obj):
        return obj.tags.all().values('tag_name')

    def get_creatorInfo(self, obj):
        user_img =  UserProfile.objects.filter(user= obj.user).first()
        request = self.context.get('request')
        user_img = user_img.profile_photo.url
        user_img = request.build_absolute_uri(user_img)
        print(user_img)
        
        context = {
            "first_name" : obj.user.first_name,
            "last_name": obj.user.last_name,
            "email": obj.user.email,
            "user_img": user_img,
        }
        return  context


    def comments(self):
        return self.comment_set.all()
    
    
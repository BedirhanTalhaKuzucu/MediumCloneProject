
from rest_framework import serializers
from .models import Story


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
        return obj.tags.all().values('id','tag_name')

    def get_creatorInfo(self, obj):
        context = {
            "first_name" : obj.user.first_name,
            "last_name": obj.user.last_name,
            "email": obj.user.email,
        }
        return  context
    def comments(self):
        return self.comment_set.all()
    
    
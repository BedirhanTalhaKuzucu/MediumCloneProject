
from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    creatorInfo = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = (
            "id",
            "creatorInfo",
            "title",
            "content",
            "image",
            "publish_date",
        )
    
    def get_creatorInfo(self, obj):
        context = {
            "first_name" : obj.user.first_name,
            "last_name": obj.user.last_name,
            "email": obj.user.email,
        }
        return  context
    
from django.contrib import admin
from .models import Story, StoryClap,CommentClap, Comment, StorieView, Tag,StoryTag,StorieShare,TagFollower


admin.site.register(Story)
admin.site.register(Comment)
admin.site.register(StoryClap)
admin.site.register(CommentClap)
admin.site.register(StorieView)
admin.site.register(Tag)
admin.site.register(StoryTag)
admin.site.register(StorieShare)
admin.site.register(TagFollower)
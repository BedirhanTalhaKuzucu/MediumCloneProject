from django.contrib import admin
from .models import Post, PostClap,CommentClap, Comment, StorieView, Tag,PostTag,StorieShare,TagFollower


admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(PostClap)
admin.site.register(CommentClap)
admin.site.register(StorieView)
admin.site.register(Tag)
admin.site.register(PostTag)
admin.site.register(StorieShare)
admin.site.register(TagFollower)
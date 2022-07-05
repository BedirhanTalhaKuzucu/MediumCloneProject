from django.contrib import admin
from .models import Post, Like, Comment, PostView, Tags


admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Like)
admin.site.register(PostView)
admin.site.register(Tags)


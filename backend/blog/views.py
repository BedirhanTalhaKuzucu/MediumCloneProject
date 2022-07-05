from django.shortcuts import render
from rest_framework import generics
from .serializers import PostSerializer
from .models import Post



class PostList(generics.ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()





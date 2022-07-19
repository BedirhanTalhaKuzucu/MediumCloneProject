from django.shortcuts import render
from rest_framework import generics
from .serializers import StorySerializer
from .models import Story



class StoryList(generics.ListAPIView):
    serializer_class = StorySerializer
    queryset = Story.objects.all()





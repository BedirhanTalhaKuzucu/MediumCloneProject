import pdb
from telnetlib import STATUS
from django.shortcuts import render
from requests import Response
from rest_framework import generics
from .serializers import StorySerializer
from .models import Story
from rest_framework.parsers import FileUploadParser



class StoryList(generics.ListCreateAPIView):
    serializer_class = StorySerializer
    queryset = Story.objects.all()
    # parser_classes=(FileUploadParser,)

    # def post(self, request):
    #     file = request.data.get("file", None)
    #     import pdb; pdb.set_trace()
    #     if file: 
    #         return Response({"message": "File is recieved"}, status=200)
    #     else:
    #         return Response({"message": "File is missing"}, status=400)



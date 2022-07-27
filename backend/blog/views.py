import pdb
from telnetlib import STATUS
from django.shortcuts import render
# from requests import Response
from rest_framework import generics
from .serializers import CommentsSerializer, StorySerializer
from .models import Comment, Story
# from rest_framework.parsers import FileUploadParser
from rest_framework.generics import get_object_or_404
from rest_framework.exceptions import ValidationError
from rest_framework import permissions
from .permissions import IsAuthorOrReadOnly
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter


class StoryList(generics.ListCreateAPIView):
    serializer_class = StorySerializer
    queryset = Story.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    filter_backends = (SearchFilter,OrderingFilter)
    search_fields = ('status', 'title',)
    ordering_fields = '__all__'
    # parser_classes=(FileUploadParser,)

    # def post(self, request):
    #     file = request.data.get("file", None)
    #     import pdb; pdb.set_trace()
    #     if file:
    #         return Response({"message": "File is recieved"}, status=200)
    #     else:
    #         return Response({"message": "File is missing"}, status=400)


class StoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Story.objects.all().order_by('publish_date')
    serializer_class = StorySerializer
    permission_classes = (IsAuthorOrReadOnly,)
    # slug_field = "title"


class CommentCreate(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        story_pk = self.kwargs.get('story_pk')
        story = get_object_or_404(Story, pk=story_pk)
        user = self.request.user

        #!Bir kullanıcı birden fazla Comment yapamasın diye :
        comments = Comment.objects.filter(story=story, user=user)
        if comments.exists():
            raise ValidationError(
                'You can only make one comment on an article!')

        serializer.save(story=story, user=user)


class CommentsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentsSerializer
    permission_classes = (IsAuthorOrReadOnly,)

# from requests import Response
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from .serializers import CommentsSerializer, StorySaveSerializer, StorySerializer
from .models import Comment, SavedStories, Story
# from rest_framework.parsers import FileUploadParser
from rest_framework.generics import get_object_or_404
from rest_framework.exceptions import ValidationError
from rest_framework import permissions
from .permissions import IsAuthorOrReadOnly
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter
from users.models import Following


class StoryList(viewsets.ModelViewSet):
    serializer_class = StorySerializer
    queryset = Story.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    filter_backends = (SearchFilter, OrderingFilter)
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


class FollowingStoriesList(generics.ListAPIView):
    serializer_class = StorySerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        print(user)
        followed_list = Following.objects.filter(follower=user)

        if followed_list:
            q = Story.objects.filter(user=followed_list[0].followed)
            for followedId in followed_list[1:]:
                q = q | Story.objects.filter(user=followedId.followed)
            return q
        else:
            return followed_list


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


class StorySaveListView(generics.ListAPIView):
    queryset = SavedStories.objects.all()
    serializer_class = StorySaveSerializer
    permission_classes = (IsAuthorOrReadOnly,)

from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response
from .pagination import SearchBarLimitPagination
from .serializers import CommentsSerializer, StorySerializer, SearchBarStorySerializer, SearchBarTagSerializer, SearchBarUserSerializer, StorySaveSerializer, AddStoryClapSerializer, TagsSerializer
from .models import Comment, Story, Tag, SavedStories, StoryClap
from rest_framework.generics import get_object_or_404
from rest_framework.exceptions import ValidationError
from rest_framework import permissions
from .permissions import IsAuthorOrReadOnly
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter
from users.models import Following
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django.contrib.auth.models import User
from rest_framework import status


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


class SearchBarView(ObjectMultipleModelAPIView):

    pagination_class = SearchBarLimitPagination

    def get_querylist(self):
        search = self.request.query_params['search'].replace('-', ' ')

        querylist = [
            {'queryset': Story.objects.filter(
                title__icontains=search), 'serializer_class': SearchBarStorySerializer},
            {'queryset': Tag.objects.filter(
                tag_name__icontains=search), 'serializer_class': SearchBarTagSerializer},
            {'queryset': User.objects.filter(
                first_name__icontains=search), 'serializer_class': SearchBarUserSerializer},
        ]

        return querylist


class StorySaveListView(viewsets.ModelViewSet):
    queryset = SavedStories.objects.all()
    serializer_class = StorySaveSerializer
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get', 'post', 'delete', ]
    lookup_field = 'storyId'

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(
            SavedStories.objects.filter(user=self.request.user))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        storyId = self.kwargs.get('storyId')
        user = self.request.user
        instance = SavedStories.objects.get(user=user, story=storyId)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AddClapStoryView(generics.CreateAPIView):
    queryset = StoryClap.objects.all()
    serializer_class = AddStoryClapSerializer
    permission_classes = (IsAuthenticated,)


class DeleteClapStoryView(generics.DestroyAPIView):
    queryset = StoryClap.objects.all()
    serializer_class = AddStoryClapSerializer
    permission_classes = (IsAuthenticated,)

    def destroy(self, request, *args, **kwargs):
        storyId = request.data["story"]
        user = self.request.user
        instance = StoryClap.objects.get(user=user, story=storyId)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagsSerializer
    # permission_classes = (IsAuthorOrReadOnly,)

    # def paginate_queryset(self, queryset):
    #     # Return a single page of results, or `None` if pagination is disabled.
    #     if self.paginator and self.request.query_params.get(self.paginator.default_limit, None) is None:
    #         return None
    #     return super().paginate_queryset(queryset)


# class SaveStoryListView(generics.ListAPIView):
#     queryset = Story.objects.all()
#     serializer_class = StorySerializer

#     def list(self, request, *args, **kwargs):
#         queryset = self.filter_queryset(Story.objects.filter(user=))

#         page = self.paginate_queryset(queryset)
#         if page is not None:
#             serializer = self.get_serializer(page, many=True)
#             return self.get_paginated_response(serializer.data)

#         serializer = self.get_serializer(queryset, many=True)
#         return Response(serializer.data)
    # permission_classes = (IsAuthorOrReadOnly,)

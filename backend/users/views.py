from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth.models import User
# from .permissions import IsUserOrReadOnly
from rest_framework.permissions import IsAdminUser

from blog.models import Story
from .models import Following, UserProfile
from.serializers import RegisterSerializer, UserBlogsSerializer, UserProfileSerializer, FollowingSerializer, UserSettingSerializer, UserProfileImageUpdateSerializer


class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.create(user=user)
        data = serializer.data
        data['token'] = token.key
        headers = self.get_success_headers(serializer.data)
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)


class UserView(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class AboutYouUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    # permission_classes = (, )


class UserFollowListView(viewsets.ModelViewSet):
    queryset = Following.objects.all()
    serializer_class = FollowingSerializer
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get', 'post', 'delete', ]
    lookup_field = 'followed'

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(
            Following.objects.filter(follower=self.request.user))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        followed = self.kwargs.get('followed')
        follower = self.request.user
        instance = Following.objects.get(follower=follower, followed=followed)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserSettingInfoView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSettingSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = "id"


class UserImageUpdatedView(RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileImageUpdateSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = "id"

    def get_object(self):
        id = self.kwargs.get('id')
        queryset = UserProfile.objects.filter(user=id)

        obj = get_object_or_404(queryset)
        self.check_object_permissions(self.request, obj)
        return obj


class UserBlogsView(viewsets.ModelViewSet):
    # queryset = User.objects.all()
    # serializer_class = UserBlogsSerializer
    # permission_classes = (IsAuthenticated,)

    # def get_queryset(self):
    #     queryset = self.queryset
    #     print('print--------------------->', self.request.user.id)
    #     query_set = queryset.filter(id=self.request.user.id)
    #     return query_set

    # def paginate_queryset(self, queryset):
    #     # Return a single page of results, or `None` if pagination is disabled.
    #     if self.paginator and self.request.query_params.get(self.paginator.default_limit, None) is None:
    #         return None
    #     return super().paginate_queryset(queryset)

    queryset = Story.objects.all()
    serializer_class = UserBlogsSerializer
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get', 'post', 'delete', ]
    lookup_field = 'storyId'

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(
            Story.objects.filter(user=self.request.user))

        # page = self.paginate_queryset(queryset)
        # if page is not None:
        #     serializer = self.get_serializer(page, many=True)
        #     return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        storyId = self.kwargs.get('storyId')
        user = self.request.user
        instance = Story.objects.get(user=user, story=storyId)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def paginate_queryset(self, queryset):
        # Return a single page of results, or `None` if pagination is disabled.
        if self.paginator and self.request.query_params.get(self.paginator.default_limit, None) is None:
            return None
        return super().paginate_queryset(queryset)

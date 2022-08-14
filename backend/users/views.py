from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView,ListAPIView,RetrieveUpdateDestroyAPIView
from django.contrib.auth.models import User
# from .permissions import IsUserOrReadOnly
from rest_framework.permissions import IsAdminUser
from .models import Following, UserProfile
from.serializers import RegisterSerializer, UserProfileSerializer, FollowingSerializer
from rest_framework.permissions import IsAuthenticated


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
    http_method_names = ['get', 'post', 'delete',]
    lookup_field = 'followed'

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(Following.objects.filter(follower = self.request.user))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    
    def destroy(self, request, *args, **kwargs):
        followed = self.kwargs.get('followed')
        follower = self.request.user
        instance = Following.objects.get(follower=follower, followed= followed)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


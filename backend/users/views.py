from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, ListCreateAPIView, ListAPIView, UpdateAPIView, RetrieveUpdateAPIView, DestroyAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth.models import User

from .permissions import IsUserOrReadOnly
from rest_framework.permissions import IsAdminUser

from .models import UserProfile
from.serializers import RegisterSerializer, UserProfileSerializer, AboutYouSerializer


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


class UserDeleteView(DestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = (IsUserOrReadOnly, )


class AboutYouUpdateView(UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = AboutYouSerializer
    permission_classes = (IsUserOrReadOnly, )
        


from django.urls import path, include
from .views import RegisterView, UserView, AboutYouUpdateView, UserDeleteView



urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path("register/", RegisterView.as_view()),
    path("users/", UserView.as_view()),
    path("users/<uuid:pk>/", AboutYouUpdateView.as_view(), name='delete'),
    path("users/<uuid:pk>/delete", UserDeleteView.as_view(), name='update'),
]

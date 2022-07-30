from django.urls import path, include
from .views import RegisterView,UserView,AboutYouUpdateDeleteView,UserDetailView


urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path("register/", RegisterView.as_view()),
    path("users/", UserView.as_view()),
    path("users/<uuid:pk>", UserDetailView.as_view(),name='user-detail'),
    path("users/<uuid:pk>/about/", AboutYouUpdateDeleteView.as_view()),
   
    
]
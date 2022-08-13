from django.urls import path, include
from .views import RegisterView, UserView, AboutYouUpdateDeleteView, UserFollowListView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', UserFollowListView )

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('following/', include(router.urls)),
    path("register/", RegisterView.as_view()),
    path("users/", UserView.as_view()),
    path("users/<uuid:pk>/", AboutYouUpdateDeleteView.as_view(), name='user-detail'),
    ]

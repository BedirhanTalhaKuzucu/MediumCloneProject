from django.urls import path, include
from .views import RegisterView, UserBlogsView, UserImageUpdatedView, UserView, AboutYouUpdateDeleteView, UserFollowListView, UserSettingInfoView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('following', UserFollowListView)
router.register('user/blogs', UserBlogsView)

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    # path('', include(router.urls)),
    path("register/", RegisterView.as_view()),
    path("users/", UserView.as_view()),
    path("users/<uuid:pk>/", AboutYouUpdateDeleteView.as_view(), name='user-detail'),
    path("users/settings/<int:id>/", UserSettingInfoView.as_view()),
    path("users/settings/image/<int:id>/", UserImageUpdatedView.as_view()),
]

urlpatterns += router.urls

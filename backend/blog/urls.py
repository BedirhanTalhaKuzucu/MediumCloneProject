from django.urls import path, include
from .views import CommentsDetail, StoryList,CommentCreate, FollowingStoriesList
from rest_framework import routers

router = routers.DefaultRouter()
router.register('stories', StoryList )

urlpatterns = [
    # path('stories/', StoryList.as_view()),
    path('', include(router.urls)),
    path('stories/<uuid:story_pk>/comment-create', CommentCreate.as_view(), name='comment-create'),
    path('stories/following', FollowingStoriesList.as_view(), name='following'),
]
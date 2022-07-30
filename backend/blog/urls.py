from rest_framework import routers
from .views import StoryList, CommentCreate, FollowingStoriesList, StorySaveListView
from django.urls import path, include

router = routers.DefaultRouter()
router.register('stories', StoryList)

urlpatterns = [
    # path('stories/', StoryList.as_view()),
    path('', include(router.urls)),
    path('stories/<uuid:story_pk>/comment-create',
         CommentCreate.as_view(), name='comment-create'),
    path('stories/following', FollowingStoriesList.as_view(), name='following'),
    path('stories/save', StorySaveListView.as_view(), name='save-story'),
]

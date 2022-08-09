from django.urls import path, include
from .views import CommentsDetail, DeleteClapStoryView, AddClapStoryView, StoryList, CommentCreate, FollowingStoriesList, SearchBarView, StorySaveListView, TagListView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('stories', StoryList)

urlpatterns = [
    # path('stories/', StoryList.as_view()),
    path('', include(router.urls)),
    path('stories/<uuid:story_pk>/comment-create',
         CommentCreate.as_view(), name='comment-create'),
    path('stories/following', FollowingStoriesList.as_view(), name='following'),
    path('stories/search', SearchBarView.as_view()),
    path('stories/save', StorySaveListView.as_view(), name='save-story'),
    path('stories/addclap', AddClapStoryView.as_view()),
    path('stories/deleteclap', DeleteClapStoryView.as_view()),
    path('tags', TagListView.as_view())

]

from django.urls import path, include
from .views import CommentsDetail, DeleteClapStoryView, AddClapStoryView, DeleteFollowTagView, FollowStorysTagView, StoryList, CommentCreate, FollowingStoriesList, SearchBarView, StorySaveListView, TagListView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('stories', StoryList)
router.register('save', StorySaveListView)
router.register('tags', TagListView)



urlpatterns = [
    path('', include(router.urls)),
    path('stories/<uuid:story_pk>/comment-create',
         CommentCreate.as_view(), name='comment-create'),
    path('stories/following', FollowingStoriesList.as_view(), name='following'),
    path('stories/search', SearchBarView.as_view()),
    path('stories/addclap', AddClapStoryView.as_view()),
    path('stories/deleteclap', DeleteClapStoryView.as_view()),
    path('stories/tagfollow', FollowStorysTagView.as_view()),
    path('stories/tagunfollow', DeleteFollowTagView.as_view()),
]

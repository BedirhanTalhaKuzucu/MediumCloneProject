from django.urls import path
from .views import CommentsDetail, StoryDetail, StoryList,CommentCreate

urlpatterns = [
    path('stories/', StoryList.as_view()),
    path('stories/<uuid:pk>/', StoryDetail.as_view(), name = 'story-info'),
    path('stories/<uuid:story_pk>/comment-create', CommentCreate.as_view(), name='comment-create'),
    path('comments/<uuid:pk>', CommentsDetail.as_view(), name="comments"),
]
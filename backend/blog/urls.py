from django.urls import path, include
from .views import StoryList
from rest_framework import routers

router = routers.DefaultRouter()
router.register('stories', StoryList )

urlpatterns = [
    # path('stories/', StoryList.as_view()),
    path('', include(router.urls))
]
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination, CursorPagination
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination


class SearchBarLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 3
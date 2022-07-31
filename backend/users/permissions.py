from rest_framework import permissions
from rest_framework.permissions import SAFE_METHODS

# SAFE_METHODS = ('GET', 'HEAD', 'OPTIONS')


class IsUserOrReadOnly(permissions.BasePermission):
    message = 'Kullanıcı üzerinde değişiklik yapma izniniz yok.'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        #! User üzerinde yalnızca o kullanıcı veya superuserlar değişiklik yapabilir/silebilir.
        return request.user == obj.user or request.user.is_superuser

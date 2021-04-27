from django.urls import re_path

from users.endpoints import ListCreatePersonEndpoint


urlpatterns = [
    re_path(r"^people/$", ListCreatePersonEndpoint.as_view(), name="people"),
]

from django.urls import path

from . import views
from equipment.views import CreateItemView

app_name = "common"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("cadastrar-relacao/", CreateItemView.as_view(), name="create-item"),
]
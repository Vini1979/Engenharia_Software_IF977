from django.urls import re_path

from equipment.endpoints import ListCreateItemEndpoint, ListCreateEquipmentEndpoint


urlpatterns = [
    re_path(r"^items/$", ListCreateItemEndpoint.as_view(), name="items"),
    re_path(r"^equipments/$", ListCreateEquipmentEndpoint.as_view(), name="items"),
]

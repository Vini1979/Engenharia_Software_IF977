from django.urls import re_path

from equipment.endpoints import (
    ListCreateItemEndpoint,
    ListCreateEquipmentEndpoint,
    RetrieveUpdateDestroyItemEndpoint,
    RetrieveUpdateDestroyEquipmentEndpoint,
)


urlpatterns = [
    re_path(r"^items/$", ListCreateItemEndpoint.as_view(), name="items"),
    re_path(
        r"^item/(?P<pk>[0-9]+)/$",
        RetrieveUpdateDestroyItemEndpoint.as_view(),
        name="retrieve_update_delete_item",
    ),
    re_path(r"^equipments/$", ListCreateEquipmentEndpoint.as_view(), name="equipment"),
    re_path(
        r"^equipment/(?P<pk>[0-9]+)/$",
        RetrieveUpdateDestroyEquipmentEndpoint.as_view(),
        name="retrieve_update_delete_equipment",
    ),
]

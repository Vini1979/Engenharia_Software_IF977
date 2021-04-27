from rest_framework.generics import ListCreateAPIView

from equipment.serializers import EquipmentSerializer, ItemSerializer
from equipment.models import Item, Equipment


class ListCreateItemEndpoint(ListCreateAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


class ListCreateEquipmentEndpoint(ListCreateAPIView):
    serializer_class = EquipmentSerializer
    queryset = Equipment.objects.all()
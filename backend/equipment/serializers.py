from rest_framework import exceptions, serializers

from equipment.models import Equipment, Item


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = ["name"]


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = [
            "kind",
            "person",
            "code",
            "brand",
            "specifications",
            "series_number",
            "state",
            "registered_date",
            "return_date",
        ]

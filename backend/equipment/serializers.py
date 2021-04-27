from rest_framework import exceptions, serializers

from equipment.models import Equipment, Item


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = ["name"]


class ItemSerializer(serializers.ModelSerializer):
    kind = serializers.SerializerMethodField()
    person = serializers.SerializerMethodField()

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

    def get_kind(self, obj):
        return obj.kind.name

    def get_person(self, obj):
        return obj.person.name
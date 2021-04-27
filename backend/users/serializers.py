from rest_framework import exceptions, serializers

from users.models import Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ["name", "address", "account"]

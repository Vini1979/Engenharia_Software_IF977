from rest_framework.generics import ListCreateAPIView

from users.serializers import PersonSerializer
from users.models import Person


class ListCreatePersonEndpoint(ListCreateAPIView):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()

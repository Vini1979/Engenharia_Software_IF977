from django.db import models
from django.utils import timezone

STATE_CHOICES = [
    ("Good", "Good"),
    ("Needs repair", "Needs repair"),
    ("In repair", "In repair"),
]


class Equipment(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Item(models.Model):
    kind = models.ForeignKey("equipment.Equipment", on_delete=models.CASCADE, related_name="+")
    person = models.ForeignKey("users.Person", on_delete=models.CASCADE, related_name="+")
    code = models.CharField(max_length=500)
    brand = models.CharField(max_length=200)
    specifications = models.TextField()
    series_number = models.CharField(max_length=200)
    state = models.CharField(choices=STATE_CHOICES, default="Good", max_length=100)
    registered_date = models.DateTimeField(default=timezone.now)
    return_date = models.DateTimeField()
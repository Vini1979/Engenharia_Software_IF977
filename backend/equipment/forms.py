from django import forms

from equipment.models import Item


class CreateItemForm(forms.ModelForm):
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
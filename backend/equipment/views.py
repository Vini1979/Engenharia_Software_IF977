from django.views.generic import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy

from equipment.models import Item
from equipment.forms import CreateItemForm


class CreateItemView(LoginRequiredMixin, CreateView):
    template_name = "common/cadastro.html"
    form_class = CreateItemForm
    model = Item

    def get_success_url(self):
        return reverse_lazy("common:retrieve_update_delete_equipment")
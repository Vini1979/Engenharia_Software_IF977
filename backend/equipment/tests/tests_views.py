from django.core import mail
from django.test import Client, TestCase
from django.urls import reverse

from model_mommy import mommy

from equipment.models import Item, Equipment


class TestCreateItemView(TestCase):
    view_name = "common:create-item"

    def setUp(self):
        self.view_url = reverse(self.view_name)

    def test_access(self):
        response = self.client.get(self.view_url)
        self.assertEqual(response.status_code, 200)
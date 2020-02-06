from django.test import TestCase
from django.urls import reverse

from rest_framework.test import APITestCase

from plague.factories import KeywordTagFactory, PlaguePointerFactory


class SerializersTestCase(TestCase):
    def setUp(self):
        self.keyword = KeywordTagFactory()


class ApiTestCase(APITestCase):
    def setUp(self):
        self.keyword_1 = KeywordTagFactory(type=2, name='Grypa')
        self.keyword_2 = KeywordTagFactory(type=2, name='Koronawirus')
        self.keyword_url_get = reverse('keywords')

    def test_api_get_keywords(self):
        response = self.client.get(self.keyword_url_get)
        expected_response = [{
            'type': 2,
            'name': 'Grypa'
            },{
                'type': 2,
                'name': 'Koronawirus'
            },
        ]
        self.assertDictEqual(dict(response.data[0]), expected_response[0])
        self.assertDictEqual(dict(response.data[1]), expected_response[1])

    def test_api_get_plague_points(self):
        expected_response = {
            'Grypa': [
                {
                    'lng': 123,
                    'lat': 123
                },
                {
                    'lng': 123,
                    'lat': 123
                }
            ]
        }

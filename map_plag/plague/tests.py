from django.test import TestCase
from django.urls import reverse

from rest_framework.test import APITestCase

from plague.factories import KeywordTagFactory


class SerializersTestCase(TestCase):
    def setUp(self):
        self.keyword = KeywordTagFactory()


class ApiTestCase(APITestCase):
    def setUp(self):
        self.keyword_1 = KeywordTagFactory(type=2, name='Grypa')
        self.keyword_2 = KeywordTagFactory(type=2, name='Koronawirus')
        self.keyword_2 = KeywordTagFactory(type=2, name='Koronawirus')
        self.keyword_url_get = reverse('keywords')

    def test_api_get_keywords(self):
        response = self.client.get(self.keyword_url_get)
        expected_response = [{
                'type': 2,
                'name': 'Koronawirus'
            },
            {
                'type': 2,
                'name': 'Grypa'
        }]
        self.assertEquals(response.data, expected_response)

    def test_api_get_plague_points(self):
        expected_response = [{
            'grypa': [
                {
                    'lon': 123,
                    'lat': 123
                },
                {
                    'lon': 123,
                    'lat': 123
                }
            ]}
        ]

from django.test import TestCase
from django.urls import reverse

from rest_framework.test import APITestCase

from plague.factories import KeywordTagFactory, PlaguePointerFactory, PlaguePointerKeywordFactory


class SerializersTestCase(TestCase):
    def setUp(self):
        self.keyword = KeywordTagFactory()


class ApiTestCase(APITestCase):
    def setUp(self):
        self.keyword_1 = KeywordTagFactory(type=2, name='Grypa')
        self.keyword_2 = KeywordTagFactory(type=2, name='Koronawirus')
        self.plague_point_1 = PlaguePointerFactory()
        self.plague_point_2 = PlaguePointerFactory()
        PlaguePointerKeywordFactory(plague_pointer=self.plague_point_1, keyword_tag=self.keyword_1)
        PlaguePointerKeywordFactory(plague_pointer=self.plague_point_1, keyword_tag=self.keyword_2)
        PlaguePointerKeywordFactory(plague_pointer=self.plague_point_2, keyword_tag=self.keyword_1)
        self.keyword_url_get = reverse('keywords')
        self.plague_url_get = reverse('plague')

    def test_api_get_keywords(self):
        response = self.client.get(self.keyword_url_get)
        expected_response = [{
                'type': 2,
                'name': 'Grypa'
            },
            {
                'type': 2,
                'name': 'Koronawirus'
            },
        ]
        self.assertDictEqual(dict(response.data[0]), expected_response[0])
        self.assertDictEqual(dict(response.data[1]), expected_response[1])

    def test_api_get_plague_points(self):
        response = self.client.get(self.plague_url_get)
        expected_response = {
            'Grypa': [
                {
                    'lng': 10.0,
                    'lat': 10.0
                },
                {
                    'lng': 10.0,
                    'lat': 10.0
                }
            ],
            'Koronawirus': [
                {
                    'lng': 10.0,
                    'lat': 10.0
                }
            ]
        }
        self.assertDictEqual(expected_response, response.json())

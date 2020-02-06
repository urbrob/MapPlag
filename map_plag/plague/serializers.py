from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import KeywordTag


class KeywordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeywordTag
        fields = ('name', 'type')

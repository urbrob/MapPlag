from django.shortcuts import render

from django.contrib.auth.models import User, Group
from rest_framework import viewsets, generics

from .models import KeywordTag
from .serializers import KeywordsSerializer


class KeywordViewSet(generics.ListAPIView):
	serializer_class = KeywordsSerializer

	def get_queryset(self):
		queryset = KeywordTag.objects.all()
		name = self.request.query_params.get('name', None)
		if name is not None:
			queryset = queryset.filter(name__startswith=name)
		return queryset

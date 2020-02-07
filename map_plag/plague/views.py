from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User, Group

from rest_framework import viewsets, generics
from rest_framework.views import APIView

from .models import KeywordTag, PlaguePointer
from .serializers import KeywordsSerializer


class KeywordViewSet(generics.ListAPIView):
	serializer_class = KeywordsSerializer

	def get_queryset(self):
		queryset = KeywordTag.objects.all()
		name = self.request.query_params.get('name', None)
		if name is not None:
			queryset = queryset.filter(name__startswith=name)
		return queryset


class PlaguePointerViewSet(APIView):
	def get_queryset(self):
		return KeywordTag.objects.all()

	def get(self, *args, **kwargs):
		queryset = self.get_queryset()
		response = {
			keyword.name: list(PlaguePointer.objects.filter(
				keyword_tag=keyword
			).values('lat', 'lng')) for keyword in queryset
		}
		return JsonResponse(response)

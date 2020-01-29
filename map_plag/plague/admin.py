from django.contrib import admin

from .models import Informer, KeywordTag


@admin.register(Informer)
class InformerAdmin(admin.ModelAdmin):
	list_display = ['api_key', 'lat', 'lan', 'street', 'street_number', 'city', 'name']


@admin.register(KeywordTag)
class KeywordTagAdmin(admin.ModelAdmin):
	list_display = ['name', 'type']
from django.contrib import admin

from .models import Informer


@admin.register(Informer)
class InformerAdmin(admin.ModelAdmin):
	list_display = ['api_key', 'lat', 'lan', 'street', 'street_number', 'city', 'name']

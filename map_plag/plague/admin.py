from django.contrib import admin
from .models import Informer, KeywordTag, PlaguePointer, PlaguePointerKeyword


@admin.register(Informer)
class InformerAdmin(admin.ModelAdmin):
	pass


@admin.register(KeywordTag)
class KeywordTagAdmin(admin.ModelAdmin):
	pass


@admin.register(PlaguePointer)
class PlaguePointerAdmin(admin.ModelAdmin):
	pass


@admin.register(PlaguePointerKeyword)
class PlaguePointerKeywordAdmin(admin.ModelAdmin):
	pass

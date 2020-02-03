from decimal import Decimal

from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Informer(models.Model):
	api_key = models.UUIDField(unique=True)
	lat = models.DecimalField(max_digits=10, decimal_places=8, validators=[MinValueValidator(Decimal('-90.0')), MaxValueValidator(Decimal('90.0'))], null=False)
	lan = models.DecimalField(max_digits=11, decimal_places=8, validators=[MinValueValidator(Decimal('-180.0')), MaxValueValidator(Decimal('180.0'))], null=False)
	street = models.CharField(max_length=200)
	street_number = models.IntegerField(default=0)
	city = models.CharField(max_length=200)
	name = models.CharField(max_length=200)


class KeywordTag(models.Model):
	name = models.CharField(max_length=100)
	TYPE_CHOICES = [
		(1, 'Symptoms'),
		(2, 'Sickness'),
	]
	type = models.IntegerField(choices=TYPE_CHOICES)


class PlaguePointer(models.Model):
	informer = models.ForeignKey(Informer, on_delete=models.CASCADE)
	description = models.TextField(max_length=1000)
	keyword_tag = models.ForeignKey(KeywordTag, on_delete=models.CASCADE)
	date_time = models.DateTimeField(auto_now_add=True)
	prescription = models.TextField(max_length=1000)

	def __str__(self):
		return f'{ self.keyword_tag.name }, { self.informer.name }'


class PlaguePointerKeyword(models.Model):
	plague_pointer = models.ForeignKey(PlaguePointer, on_delete=models.CASCADE)
	keyword_tag = models.ForeignKey(KeywordTag, on_delete=models.CASCADE)
	trust_level = models.IntegerField(validators=[MinValueValidator(0)], default=0, null=True)

	def __str__(self):
		if self.keyword_tag.type is 'Sickness':
			return f'Sickness, { self.trust_level } lvl, {self.keyword_tag.name }, { self.plague_pointer.informer.name }'
		return f'Symptom, { self.keyword_tag.name }, { self.plague_pointer.informer.name }'
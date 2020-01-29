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


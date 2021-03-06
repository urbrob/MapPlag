# Generated by Django 2.2.2 on 2020-02-07 10:12

from decimal import Decimal
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plague', '0006_auto_20200207_0940'),
    ]

    operations = [
        migrations.AddField(
            model_name='plaguepointer',
            name='lat',
            field=models.DecimalField(decimal_places=8, default=1, max_digits=10, validators=[django.core.validators.MinValueValidator(Decimal('-90.0')), django.core.validators.MaxValueValidator(Decimal('90.0'))]),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='plaguepointer',
            name='lng',
            field=models.DecimalField(decimal_places=8, default=1, max_digits=11, validators=[django.core.validators.MinValueValidator(Decimal('-180.0')), django.core.validators.MaxValueValidator(Decimal('180.0'))]),
            preserve_default=False,
        ),
    ]

# Generated by Django 2.2.2 on 2020-02-07 12:24

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plague', '0007_auto_20200207_1012'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plaguepointer',
            name='lat',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(-90.0), django.core.validators.MaxValueValidator(90)]),
        ),
        migrations.AlterField(
            model_name='plaguepointer',
            name='lng',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(-180.0), django.core.validators.MaxValueValidator(180)]),
        ),
    ]

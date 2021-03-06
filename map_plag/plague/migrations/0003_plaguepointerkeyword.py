# Generated by Django 2.1.5 on 2020-01-30 01:49

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('plague', '0002_keywordtag_plaguepointer'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlaguePointerKeyword',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('trust_level', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('keyword_tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plague.KeywordTag')),
                ('plague_pointer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plague.PlaguePointer')),
            ],
        ),
    ]

# Generated by Django 2.2.2 on 2020-02-07 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plague', '0005_auto_20200206_1306'),
    ]

    operations = [
        migrations.RenameField(
            model_name='informer',
            old_name='lan',
            new_name='lng',
        ),
        migrations.AlterField(
            model_name='keywordtag',
            name='name',
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.RemoveField(
            model_name='plaguepointer',
            name='keyword_tag',
        ),
        migrations.AddField(
            model_name='plaguepointer',
            name='keyword_tag',
            field=models.ManyToManyField(through='plague.PlaguePointerKeyword', to='plague.KeywordTag'),
        ),
    ]
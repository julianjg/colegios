# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-09-14 12:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyecto', '0014_alumno2'),
    ]

    operations = [
        migrations.AddField(
            model_name='alumno2',
            name='institucion',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='alumno2',
            name='procedencia',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='alumno2',
            name='sede',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
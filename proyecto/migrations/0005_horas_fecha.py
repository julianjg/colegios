# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-07-18 14:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyecto', '0004_horas_nombre'),
    ]

    operations = [
        migrations.AddField(
            model_name='horas',
            name='fecha',
            field=models.CharField(max_length=15, null=True),
        ),
    ]

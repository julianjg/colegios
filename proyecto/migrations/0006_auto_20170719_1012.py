# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-07-19 15:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('proyecto', '0005_horas_fecha'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fechas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.CharField(max_length=15, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='horas',
            name='fecha',
        ),
        migrations.RemoveField(
            model_name='horas',
            name='nombre',
        ),
        migrations.AddField(
            model_name='fechas',
            name='hora',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='proyecto.Horas'),
        ),
        migrations.AddField(
            model_name='fechas',
            name='nombre',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='proyecto.FormularioEstimulos'),
        ),
    ]

# Generated by Django 2.0.3 on 2018-09-26 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0009_auto_20180926_0944'),
    ]

    operations = [
        migrations.CreateModel(
            name='Salad_Price',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=50)),
                ('price', models.FloatField(max_length=5)),
            ],
            options={
                'verbose_name': 'Salads Price',
            },
        ),
    ]

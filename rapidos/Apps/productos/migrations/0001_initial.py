# Generated by Django 5.1.3 on 2024-11-16 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.TextField()),
                ('precio_base', models.DecimalField(decimal_places=2, max_digits=10)),
                ('activo', models.BooleanField(default=True)),
            ],
        ),
    ]

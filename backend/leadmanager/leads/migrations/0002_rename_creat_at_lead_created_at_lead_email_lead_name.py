# Generated by Django 4.0.1 on 2022-01-06 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lead',
            old_name='creat_at',
            new_name='created_at',
        ),
        migrations.AddField(
            model_name='lead',
            name='email',
            field=models.EmailField(default=1, max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lead',
            name='name',
            field=models.CharField(default='sa', max_length=50),
            preserve_default=False,
        ),
    ]

from django.db import models

# Create your models here.
class Us(models.Model):
    email = models.CharField(max_length=60)
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=256)

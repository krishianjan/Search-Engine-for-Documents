from django.db import models

# Create your models here.

#class documents(models.Model):
    #content = models.JSONField()  # Store document content as JSON

class invertedindex(models.Model):
    Index = models.JSONField()  # List of document IDs and positions


class documents(models.Model):
    content = models.BinaryField()  # Store binary content of the files
    file_type = models.CharField(max_length=50)  # Store the file type as a string (e.g., 'pdf', 'txt', 'docx')


    
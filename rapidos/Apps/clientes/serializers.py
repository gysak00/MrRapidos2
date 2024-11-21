# Importing the necessary module from Django REST Framework
from rest_framework import serializers

# Importing the Cliente model from the current app's models
from .models import Cliente

# Defining a serializer for the Cliente model
class ClienteSerializer(serializers.ModelSerializer):
    # Meta class to specify model-related information
    class Meta:
        # Specifying the model to be serialized
        model = Cliente
        # Specifying the fields to include in the serialization
        fields = ['id', 'nombre', 'direccion', 'telefono', 'email']

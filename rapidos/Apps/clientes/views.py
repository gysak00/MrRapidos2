from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Apps.clientes.models import Cliente
from Apps.clientes.serializers import ClienteSerializer

# list and create clients
class ClienteList(ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

# show, update y delete a client específic
class ClienteDetail(RetrieveUpdateDestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from Apps.empleados.models import Empleado
from Apps.empleados.serializers import EmpleadoSerializer

class EmpleadoList(ListCreateAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

class EmpleadoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

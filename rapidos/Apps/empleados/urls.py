from django.urls import path
from Apps.empleados.views import EmpleadoList, EmpleadoDetail

app_name = "empleados"

urlpatterns = [
    path('', EmpleadoList.as_view(), name="list"),
    path('<int:pk>', EmpleadoDetail.as_view(), name="detail"),
]

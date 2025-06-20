# estudiantes/urls.py
from django.urls import path
from .views import analizar_estudiantes

urlpatterns = [
    path('analizar/', analizar_estudiantes, name='analizar_estudiantes'),
]
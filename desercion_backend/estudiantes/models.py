from django.db import models

# Create your models here.
class Estudiante(models.Model):
    ESTADO_CHOICES = [('estudiando', 'Estudiando'), ('retirado', 'Retirado')]

    edad = models.PositiveIntegerField()
    semestre = models.PositiveIntegerField()
    estado = models.CharField(max_length=10, choices=ESTADO_CHOICES)
    razon_retiro = models.TextField()
    historial_criminal = models.BooleanField()
    situacion_economica = models.CharField(max_length=255)
    discapacidad_o_enfermedad = models.TextField(blank=True) 

    def __str__(self):
        return f'Estudiante {self.id} - {self.estado}'
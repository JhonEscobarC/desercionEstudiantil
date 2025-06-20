# estudiantes/cargar_datos.py
import random
from estudiantes.models import Estudiante

def run():
    razones = [
        "Problemas económicos", "Falta de interés", "Situación familiar",
        "Problemas de salud", "Cambio de carrera", "Sigue con sus estudios"
    ]
    enfermedades = [
        "Ninguna", "Ansiedad", "Depresión", "Discapacidad visual", "Epilepsia"
    ]

    for _ in range(30):
        edad = random.randint(17, 30)
        semestre = random.randint(1, 10)
        estado = random.choice(['estudiando', 'retirado'])
        razon = "Sigue con sus estudios" if estado == 'estudiando' else random.choice(razones)
        historial = random.choice([True, False, False])  # Menos probabilidad de que tenga historial
        economia = random.choice(["buena", "media", "baja"])
        enfermedad = random.choice(enfermedades)

        Estudiante.objects.create(
            edad=edad,
            semestre=semestre,
            estado=estado,
            razon_retiro=razon,
            historial_criminal=historial,
            situacion_economica=economia,
            discapacidad_o_enfermedad=enfermedad
        )

import io
import base64
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.linear_model import LogisticRegression
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Estudiante

@api_view(['GET'])
def analizar_estudiantes(request):
    queryset = Estudiante.objects.all()
    if queryset.count() < 3:
        return Response({"error": "Se necesitan al menos 3 estudiantes para análisis."}, status=400)

    data = pd.DataFrame(list(queryset.values()))

    # Codificación
    data['estado_binario'] = data['estado'].map({'estudiando': 0, 'retirado': 1})
    data['criminal'] = data['historial_criminal'].astype(int)
    data['economica_cod'] = data['situacion_economica'].map({'baja': 0, 'media': 1, 'buena': 2})
    data['enfermedad_cod'] = data['discapacidad_o_enfermedad'].astype('category').cat.codes
    data['razon_cod'] = data['razon_retiro'].astype('category').cat.codes

    X = data[['edad', 'semestre', 'criminal', 'economica_cod', 'enfermedad_cod', 'razon_cod']]
    y = data['estado_binario']

    # Modelos
    kmeans = KMeans(n_clusters=2, n_init=10, random_state=0)
    clusters = kmeans.fit_predict(X)
    data['cluster'] = clusters

    model = LogisticRegression()
    model.fit(X, y)

    ### GRÁFICO 1: Pie chart - razones de deserción
    razones = data[data['estado'] == 'retirado']['razon_retiro'].value_counts()
    fig1, ax1 = plt.subplots(figsize=(10, 10))
    fig1.patch.set_facecolor('#1C263B')
    ax1.pie(razones, labels=razones.index, autopct='%1.1f%%', startangle=90, textprops={'color': 'white', 'fontsize': 15})
    ax1.set_title("Razones de deserción", color='white',)
    plt.tight_layout()
    buf1 = io.BytesIO()
    plt.savefig(buf1, format='png')
    buf1.seek(0)
    grafico_pie = base64.b64encode(buf1.read()).decode('utf-8')
    buf1.close()

    ### GRÁFICO 2: Barras - relación razón retiro vs situación económica
    fig2, ax2 = plt.subplots(figsize=(10, 6))
    fig2.patch.set_facecolor('#1C263B')
    sns.countplot(data=data[data['estado'] == 'retirado'],
                  x='razon_retiro',
                  hue='situacion_economica',
                  palette='plasma',
                  ax=ax2)
    ax2.set_title('Razón de retiro vs Situación Económica', color='white')
    ax2.set_xlabel('Razón de retiro', color='white')
    ax2.set_ylabel('Cantidad', color='white')
    ax2.tick_params(axis='x', rotation=30, colors='white')
    ax2.tick_params(axis='y', colors='white')
    ax2.legend(title="Economía", facecolor='#2A354A')
    ax2.set_facecolor('#2A354A')
    plt.tight_layout()
    buf2 = io.BytesIO()
    plt.savefig(buf2, format='png')
    buf2.seek(0)
    grafico_barras = base64.b64encode(buf2.read()).decode('utf-8')
    buf2.close()

    return Response({
        "mensaje": "Análisis generado exitosamente.",
        "grafico_pie": grafico_pie,
        "grafico_barras": grafico_barras
    })

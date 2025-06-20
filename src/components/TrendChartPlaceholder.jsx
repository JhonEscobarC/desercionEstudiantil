import React, { useState } from 'react';
import axios from 'axios';

const TrendChartPlaceholder = () => {
  const [grafico, setGrafico] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const generarGrafico = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/analizar/');
      setGrafico(res.data.grafico);
      setMensaje(res.data.mensaje);
    } catch (error) {
      setMensaje('Error al generar el gráfico. Verifica que el backend esté activo y haya datos suficientes.');
      console.error(error);
    }
  };

  return (
    <div className="bg-[#1C263B] p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white h-auto">Gráfico de tendencias</h2>

      <div className="h-auto bg-[#2A354A] rounded-lg flex items-center justify-center">
        {grafico ? (
          <img src={`data:image/png;base64,${grafico}`} alt="Gráfico de análisis" className="h-auto object-contain" />
        ) : (
          <p className="text-[#A0AEC0]">{mensaje || 'Aquí irán los gráficos'}</p>
        )}
      </div>

      <button
        onClick={generarGrafico}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Generar gráfico
      </button>
    </div>
  );
};

export default TrendChartPlaceholder;

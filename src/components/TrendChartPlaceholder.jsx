import React, { useState } from "react";
import axios from "axios";

const TrendChartPlaceholder = ({ onGenerar }) => {
  const [graficoPie, setGraficoPie] = useState(null);
  const [graficoBarras, setGraficoBarras] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const generarGraficos = async () => {
    setCargando(true);
    setError("");
    setMensaje("");
    setGraficoPie(null);
    setGraficoBarras(null);

    try {
      const response = await axios.get("http://localhost:8000/api/analizar/");
      setMensaje(response.data.mensaje);
      setGraficoPie(response.data.grafico_pie);
      setGraficoBarras(response.data.grafico_barras);

      // Dispara la animación en DashboardCards
      if (onGenerar) onGenerar();
    } catch (err) {
      setError("Error al generar los gráficos. Asegúrate de que el backend esté activo y con suficientes datos.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-6 bg-[#1C263B] rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold text-white">Análisis de Deserción Estudiantil</h2>

      {mensaje && <p className="text-green-400 font-medium">{mensaje}</p>}
      {error && <p className="text-red-400 font-medium">{error}</p>}
      <div className="flex gap-32">
        {graficoPie && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#A0AEC0]">Razones de Deserción</h3>
          <img
            src={`data:image/png;base64,${graficoPie}`}
            alt="Gráfico de pastel"
            className="w-[400px] h-[400px] rounded-lg border shadow"
          />
        </div>
        )}

        {graficoBarras && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#A0AEC0]">Relación con Situación Económica</h3>
          <img
            src={`data:image/png;base64,${graficoBarras}`}
            alt="Gráfico de barras"
            className="w-[600px] h-auto rounded-lg border shadow"
          />
        </div>
        )}
      </div>
      {!graficoPie && !graficoBarras && (
        <button
          onClick={generarGraficos}
          disabled={cargando}
          className="bg-[#3B82F6] hover:bg-[#60A5FA] px-5 py-2 rounded-md transition disabled:opacity-50"
        >
          {cargando ? "Generando gráficos..." : "Generar gráfico"}
        </button>
      )}

    </div>
  );
};

export default TrendChartPlaceholder;

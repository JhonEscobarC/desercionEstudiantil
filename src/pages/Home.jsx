import React from 'react'
import DashboardCards from '../components/DashboardCards'
import TrendChartPlaceholder from '../components/TrendChartPlaceholder'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen p-8 bg-[#0E1628] text-white">
      <h1 className="text-3xl font-bold mb-6">Panel de Deserción Estudiantil</h1>
      
      <DashboardCards />
      <TrendChartPlaceholder />

      {/* Botón 1: Conectar BD */}
      <Link
        to="/connect-db"
        className="mt-8 inline-block bg-[#3B82F6] hover:bg-[#60A5FA] p-3 rounded-md transition"
      >
        Conectar Base de Datos
      </Link>

      {/* Botón 2: Otra forma de ir */}
      <Link
        to="/"
        className="mt-4 inline-block bg-[#1C263B] hover:bg-[#2A354A] p-3 rounded-md text-[#A0AEC0] transition ml-4"
      >
        Salir
      </Link>
    </div>
  )
}

export default Home

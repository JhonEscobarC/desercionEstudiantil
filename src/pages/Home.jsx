import React, { useState } from 'react'
import DashboardCards from '../components/DashboardCards'
import TrendChartPlaceholder from '../components/TrendChartPlaceholder'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const isAdmin = localStorage.getItem('isAdmin') === 'true'
  const [activarAnimacion, setActivarAnimacion] = useState(false)

  if (!isAdmin) {
    navigate('/')
    return null
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#02193b] to-[#2c406d] text-white">
      <h1 className="text-3xl font-bold mb-2">Panel de Deserción Estudiantil</h1>
      <p className="text-[#A0AEC0] mb-6">Bienvenido administrador 👋</p>

      <DashboardCards activar={activarAnimacion} />
      <TrendChartPlaceholder onGenerar={() => setActivarAnimacion(true)} />

      <Link
        to="/connect-db"
        className="mt-8 inline-block bg-[#3B82F6] hover:bg-[#60A5FA] p-3 rounded-md transition"
      >
        Conectar Base de Datos
      </Link>

      <Link
        to="/"
        className="mt-8 inline-block bg-[#4d535c] hover:bg-[#60A5FA] p-3 rounded-md transition ml-2"
      >
        Salir
      </Link>
    </div>
  )
}

export default Home

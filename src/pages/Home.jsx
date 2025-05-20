import React from 'react'
import DashboardCards from '../components/DashboardCards'
import TrendChartPlaceholder from '../components/TrendChartPlaceholder'

const Home = () => {
  return (
    <div className="min-h-screen p-8 bg-[#0E1628] text-white">
      <h1 className="text-3xl font-bold mb-6">Panel de Deserción Estudiantil</h1>
      <DashboardCards />
      <TrendChartPlaceholder />
    </div>
  )
}

export default Home

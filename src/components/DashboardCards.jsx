import React from 'react'

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-[#1C263B] p-6 rounded-lg">
        <p>Total de estudiantes</p>
        <h2 className="text-2xl font-bold">1234</h2>
      </div>
      <div className="bg-[#1C263B] p-6 rounded-lg">
        <p>Tasa de deserción</p>
        <h2 className="text-2xl font-bold">8.5%</h2>
      </div>
    </div>
  )
}

export default DashboardCards

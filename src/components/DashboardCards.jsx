import React, { useEffect, useState } from 'react'

const DashboardCards = ({ activar }) => {
  const [estudiantes, setEstudiantes] = useState(0)
  const [tasa, setTasa] = useState(0)

  useEffect(() => {
    if (!activar) return

    const targetEstudiantes = 100
    const targetTasa = 30
    const step = 1
    const speed = 20

    const interval = setInterval(() => {
      setEstudiantes((prev) => {
        if (prev < targetEstudiantes) return prev + step
        return targetEstudiantes
      })

      setTasa((prev) => {
        if (prev < targetTasa) return prev + step
        return targetTasa
      })
    }, speed)

    return () => clearInterval(interval)
  }, [activar])

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-[#1C263B] p-6 rounded-lg shadow-lg">
        <p>Total de estudiantes</p>
        <h2 className="text-3xl font-bold">{estudiantes}</h2>
      </div>
      <div className="bg-[#1C263B] p-6 rounded-lg shadow-lg">
        <p>Tasa de deserción</p>
        <h2 className="text-3xl font-bold">{tasa}%</h2>
      </div>
    </div>
  )
}

export default DashboardCards

import React from 'react'
import DBForm from '../components/DBForm'
import { Link } from 'react-router-dom'

const ConnectDB = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E1628] p-6">
      <div className="bg-[#1C263B] p-10 rounded-lg w-full max-w-xl mb-6">
        <h2 className="text-2xl font-bold mb-4">Conectar a la Base de Datos</h2>
        <DBForm />
      </div>

      {/* Botón para volver al dashboard */}
      <Link
        to="/dashboard"
        className="bg-[#3B82F6] hover:bg-[#60A5FA] p-3 rounded-md transition"
      >
        Volver al Dashboard
      </Link>
    </div>
  )
}

export default ConnectDB
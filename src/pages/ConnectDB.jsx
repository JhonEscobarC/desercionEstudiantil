import React from 'react'
import DBForm from '../components/DBForm'

const ConnectDB = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E1628]">
      <div className="bg-[#1C263B] p-10 rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Conectar a la Base de Datos</h2>
        <DBForm />
      </div>
    </div>
  )
}

export default ConnectDB

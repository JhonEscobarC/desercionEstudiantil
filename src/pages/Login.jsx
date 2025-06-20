import React from 'react'
import LoginForm from '../components/LoginForm'
import logo from '../assets/logo.png' // asegúrate de que la ruta coincida

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1C263B] to-[#3B82F6]">
      <div className="bg-[#1C263B] p-10 rounded-xl shadow-xl w-full max-w-md space-y-6 relative">
        
        {/* Logo circular */}
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
          <img
            src={logo}
            alt="Eduplorex Logo"
            className="w-35 h-35 object-cover rounded-full border-4 border-[#3B82F6] shadow-md bg-white"
          />
        </div>

        <div className="pt-16 text-center">
          <h2 className="text-3xl font-bold mb-2 text-white">Sistema de Deserción</h2>
          <p className="text-[#D1D5DB] text-sm">Ingresa tus credenciales para acceder al panel</p>
        </div>

        <LoginForm />

        <div className="text-center text-[#A0AEC0] text-xs">
          Proyecto académico – Universidad de Ejemplo
        </div>
      </div>
    </div>
  )
}

export default Login

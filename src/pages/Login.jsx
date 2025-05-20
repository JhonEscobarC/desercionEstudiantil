import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E1628]">
      <div className="bg-[#1C263B] p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Iniciar sesión</h2>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login

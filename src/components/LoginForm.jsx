import React from 'react'

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Correo electrónico"
        className="p-3 bg-[#2A354A] rounded-md outline-none"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="p-3 bg-[#2A354A] rounded-md outline-none"
      />
      <button className="bg-[#3B82F6] hover:bg-[#60A5FA] p-3 rounded-md transition">
        Ingresar
      </button>
    </form>
  )
}

export default LoginForm

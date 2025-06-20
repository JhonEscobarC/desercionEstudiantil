import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === 'admin123' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true')
      navigate('/dashboard')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 bg-[#2A354A] rounded-md outline-none"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 bg-[#2A354A] rounded-md outline-none"
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-[#3B82F6] hover:bg-[#60A5FA] p-3 rounded-md transition"
      >
        Ingresar
      </button>
    </form>
  )
}

export default LoginForm

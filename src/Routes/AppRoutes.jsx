import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import ConnectDB from '../pages/ConnectDB'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/connect-db" element={<ConnectDB />} />
    </Routes>
  )
}

export default AppRoutes
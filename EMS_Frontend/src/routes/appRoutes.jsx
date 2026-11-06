import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '@/pages/lendingPage/Homepage'
import Login from '@/pages/auth/Login'
import ForgotPassword from '@/pages/auth/ForgotPassword'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

    </Routes>
  )
}

export default AppRoutes
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'

import Mainlogo from '@/assets/Mainlogo.png'
import authbg from '@/assets/authbg.png'

import Input from '@/components/ui/inputbox'
import Loader from '@/components/ui/loader'
import { useToast } from '@/components/ui/toast'

const Login = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Adjust endpoint and response shape to your backend
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          remember,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password.')
      }

      toast.success('Welcome back to EMPOWER EMS.', { title: 'Login successful' })
      navigate('/dashboard') // change to your route
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.', {
        title: 'Login failed',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page" style={{ '--auth-bg': `url("${authbg}")` }}>
      {loading && (
        <Loader text="Signing you in..." description="Please wait while we verify your credentials." />
      )}

      <div className="auth-card">
        <img src={Mainlogo} alt="EMPOWER EMS" className="auth-logo" />

        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-description">Sign in to access your EMPOWER EMS account.</p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
          />

          <div className="mb-5 flex items-center justify-between gap-3">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span className="form-check-label">Remember me</span>
            </label>

            <Link to="/forgot-password" className="link-brand">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
            <LogIn size={18} />
            Sign In
          </button>
        </form>

        <p className="auth-footer">© {new Date().getFullYear()} EMPOWER EMS. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Login
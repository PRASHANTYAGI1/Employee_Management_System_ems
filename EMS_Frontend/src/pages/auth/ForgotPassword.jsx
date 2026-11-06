import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft, ShieldCheck, KeyRound } from 'lucide-react'

import Mainlogo from '@/assets/Mainlogo.png'
import Authbg from '@/assets/authbg.png'

import Input from '@/components/ui/inputbox'
import Loader from '@/components/ui/loader'
import { useToast } from '@/components/ui/toast'

const ForgotPassword = () => {
  const toast = useToast()

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess(false)
    setLoading(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim().toLowerCase() }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send email.')
      }

      setSuccess(true)
      toast.success('Check your inbox for the verification email.', { title: 'Email sent' })
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.', {
        title: 'Could not send email',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page" style={{ '--auth-bg': `url("${Authbg}")` }}>
      {loading && (
        <Loader text="Sending Email..." description="Please wait while we email your verification code." />
      )}

      <div className="auth-card">
        <img src={Mainlogo} alt="EMPOWER EMS" className="auth-logo" />

        <div className="auth-icon">
          <KeyRound size={28} strokeWidth={2} />
        </div>

        <h1 className="auth-title">Forgot Password?</h1>

        <p className="auth-description">
          Don't worry, it happens. Enter your registered email address and
          we'll send you a verification email to recover your account.
        </p>

        {success && (
          <div className="alert alert-success mb-5" role="status">
            <ShieldCheck size={20} className="alert-icon" />
            <div className="min-w-0 flex-1">
              <strong className="alert-title">Email Sent Successfully!</strong>
              <p className="alert-text">
                If your account exists, a verification email has been sent to
                your registered email. Please check your inbox.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            label="Registered Email Address"
            name="email"
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setSuccess(false)
            }}
            required
            disabled={loading}
          />

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            disabled={loading || !email.trim()}
          >
            <Mail size={18} />
            Send
          </button>
        </form>

        <div className="mt-5 flex justify-center">
          <Link to="/login" className="auth-back-link">
            <ArrowLeft size={17} />
            Back to Login
          </Link>
        </div>

        <p className="auth-footer">© {new Date().getFullYear()} EMPOWER EMS. All rights reserved.</p>
      </div>
    </div>
  )
}

export default ForgotPassword
import React, {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react'
import { createPortal } from 'react-dom'
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from 'lucide-react'

import { Spinner } from '@/components/ui/loader'

const ToastContext = createContext(null)

const ICONS = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
}

const DEFAULT_DURATION = {
  success: 3500,
  info: 3500,
  warning: 4500,
  error: 5000,
  loading: 0, // stays until updated or dismissed
}

let counter = 0

const ToastItem = ({ toast, onClose }) => {
  const Icon = ICONS[toast.type]

  return (
    <div
      className={`toast toast-${toast.type} ${toast.leaving ? 'is-leaving' : ''}`}
      role={toast.type === 'error' ? 'alert' : 'status'}
    >
      <span className="toast-icon">
        {toast.type === 'loading' ? <Spinner size="sm" /> : <Icon size={18} />}
      </span>

      <div className="toast-body">
        {toast.title && <p className="toast-title">{toast.title}</p>}
        {toast.message && <p className="toast-message">{toast.message}</p>}
      </div>

      <button
        type="button"
        className="toast-close"
        onClick={() => onClose(toast.id)}
        aria-label="Close notification"
      >
        <X size={16} />
      </button>

      {toast.duration > 0 && (
        <span
          key={`${toast.type}-${toast.id}`}
          className="toast-progress"
          style={{ animationDuration: `${toast.duration}ms` }}
        />
      )}
    </div>
  )
}

export const ToastProvider = ({ children, position = 'top-right', max = 4 }) => {
  const [toasts, setToasts] = useState([])
  const timers = useRef({})

  useEffect(() => {
    const t = timers.current
    return () => Object.values(t).forEach(clearTimeout)
  }, [])

  const dismiss = useCallback((id) => {
    clearTimeout(timers.current[id])
    delete timers.current[id]
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)))
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 200)
  }, [])

  const show = useCallback((type, message, options = {}) => {
    const id = options.id ?? ++counter
    const duration = options.duration ?? DEFAULT_DURATION[type]
    const next = { id, type, message, title: options.title, duration, leaving: false }

    setToasts((prev) => {
      const exists = prev.some((t) => t.id === id)
      const list = exists ? prev.map((t) => (t.id === id ? next : t)) : [...prev, next]
      return list.slice(-max)
    })

    clearTimeout(timers.current[id])
    if (duration > 0) {
      timers.current[id] = setTimeout(() => dismiss(id), duration)
    }

    return id
  }, [dismiss, max])

  const api = useMemo(() => ({
    show,
    success: (message, options) => show('success', message, options),
    error: (message, options) => show('error', message, options),
    warning: (message, options) => show('warning', message, options),
    info: (message, options) => show('info', message, options),
    loading: (message, options) => show('loading', message, options),
    dismiss,

    // toast.promise(apiCall, { loading: '...', success: '...', error: '...' })
    promise: async (promise, { loading, success, error }) => {
      const id = show('loading', loading)
      try {
        const result = await promise
        show('success', typeof success === 'function' ? success(result) : success, { id })
        return result
      } catch (err) {
        show('error', typeof error === 'function' ? error(err) : error, { id })
        throw err
      }
    },
  }), [show, dismiss])

  return (
    <ToastContext.Provider value={api}>
      {children}
      {createPortal(
        <div className={`toast-container toast-pos-${position}`} aria-live="polite">
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onClose={dismiss} />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}
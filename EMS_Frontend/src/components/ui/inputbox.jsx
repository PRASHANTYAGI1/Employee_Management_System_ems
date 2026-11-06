
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Input = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  ...rest
}) => {

  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'

  const inputType = isPassword && showPassword
    ? 'text'
    : type

  return (
    <div className="form-group">

      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>
      )}

      <div className="input-wrapper">

        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            className="input-password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword
              ? <EyeOff size={18} />
              : <Eye size={18} />
            }
          </button>
        )}

      </div>

      {error && (
        <span className="form-error">
          {error}
        </span>
      )}

    </div>
  )
}

export default Input

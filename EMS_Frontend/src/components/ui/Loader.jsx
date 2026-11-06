import React from 'react'
import { createPortal } from 'react-dom'

export const Spinner = ({ size = 'md', light = false, className = '' }) => (
  <span
    className={`loader-ring loader-ring-${size} ${light ? 'loader-ring-light' : ''} ${className}`}
    aria-hidden="true"
  />
)

const Loader = ({
  text = 'Loading...',
  description = '',
  variant = 'overlay', // 'overlay' | 'page' | 'inline'
  size,
  className = '',
}) => {
  const ringSize = size || (variant === 'inline' ? 'sm' : 'lg')

  if (variant === 'inline') {
    return (
      <span className={`loader-inline ${className}`} role="status" aria-live="polite">
        <Spinner size={ringSize} />
        <span className="loader-text-inline">{text}</span>
      </span>
    )
  }

  if (variant === 'page') {
    return (
      <div className={`loader-page ${className}`} role="status" aria-live="polite">
        <Spinner size={ringSize} />
        <div>
          <p className="loader-text">{text}</p>
          {description && <p className="loader-description">{description}</p>}
        </div>
      </div>
    )
  }

  return createPortal(
    <div className={`loader-overlay ${className}`} role="status" aria-live="polite" aria-busy="true">
      <div className="loader-box">
        <Spinner size={ringSize} />
        <div>
          <p className="loader-text">{text}</p>
          {description && <p className="loader-description">{description}</p>}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Loader
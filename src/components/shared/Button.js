import React from 'react'

export default function Button ({
  className = '',
  onClick,
  disabled = false,
  children
}) {
  return (
    <div className={`btn ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </div>
  )
}

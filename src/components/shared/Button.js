import React from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any
}

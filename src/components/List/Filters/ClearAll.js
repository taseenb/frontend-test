import React from 'react'

export default function ClearAll ({ onResetFilters, disabled }) {
  return (
    <div
      className={`btn clear-all white ${disabled ? 'disabled' : ''}`}
      onClick={onResetFilters}
    >
      Clear all
    </div>
  )
}

import React from 'react'

export default function Radio ({ checked }) {
  return (
    <span className={`radio ${checked ? '' : 'checked'}`}>
      <span />
    </span>
  )
}

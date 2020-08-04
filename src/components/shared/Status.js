import React from 'react'

export default function Status ({ isClosed }) {
  return (
    <div className={`status ${isClosed ? 'closed' : 'open'}`}>
      <span>{isClosed ? 'closed' : 'open now'}</span>
    </div>
  )
}

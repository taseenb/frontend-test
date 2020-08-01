import React from 'react'

export default function Status ({ isClosed }) {
  return (
    <div className={`status ${isClosed ? 'closed' : 'open'}`}>
      {isClosed ? 'closed' : 'open now'}
    </div>
  )
}

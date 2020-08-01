import React from 'react'

export default function Loading ({ fullscreen }) {
  return (
    <div className={`loading ${fullscreen ? 'fullscreen' : ''}`}>
      <div className=''>Loading...</div>
    </div>
  )
}

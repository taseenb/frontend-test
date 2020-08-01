import React from 'react'

export default function HttpError ({
  message = 'Page not found',
  status = 404
}) {
  return (
    <div className='http-error'>
      <div>
        <h1>{status}</h1>
        <h2>{message}</h2>
      </div>
    </div>
  )
}

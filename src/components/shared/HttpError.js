import React from 'react'

export default function HttpError ({
  message = 'Page not found',
  status = 404,
  fullscreen = false
}) {
  return (
    <div className={`http-error ${fullscreen && 'fullscreen'}`}>
      <div>
        <h1>{status}</h1>
        <h2>{message}</h2>
      </div>
    </div>
  )
}

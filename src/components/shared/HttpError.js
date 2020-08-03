import React from 'react'

export default function HttpError ({
  message = 'Page not found',
  status = 404,
  fullscreen,
  inline
}) {
  return (
    <div className={`http-error ${fullscreen && 'fullscreen'}`}>
      <div>
        {inline ? (
          <p>
            {status} - {message}
          </p>
        ) : (
          <>
            <h1>{status}</h1>
            <h2>{message}</h2>
          </>
        )}
      </div>
    </div>
  )
}

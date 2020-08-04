import React from 'react'
import PropTypes from 'prop-types'

export default function HttpError ({
  message = 'Page not found',
  status = 404,
  fullscreen,
  inline
}) {
  return (
    <div className={`http-error ${fullscreen && 'fullscreen'}`} data-testid='http-error'>
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

HttpError.propTypes = {
  message: PropTypes.string,
  status: PropTypes.number,
  fullscreen: PropTypes.bool,
  inline: PropTypes.bool
}

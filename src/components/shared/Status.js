import React from 'react'
import PropTypes from 'prop-types'

function Status ({ isClosed }) {
  return (
    <div className={`status ${isClosed ? 'closed' : 'open'}`}>
      <span>{isClosed ? 'closed' : 'open now'}</span>
    </div>
  )
}

Status.propTypes = {
  isClosed: PropTypes.bool
}

export default Status

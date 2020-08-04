import React from 'react'
import PropTypes from 'prop-types'

function Radio ({ checked }) {
  return (
    <span className={`radio ${checked ? 'checked' : ''}`}>
      <span />
    </span>
  )
}

Radio.propTypes = {
  checked: PropTypes.bool
}

export default Radio

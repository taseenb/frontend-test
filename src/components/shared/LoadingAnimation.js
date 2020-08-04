import React from 'react'
import PropTypes from 'prop-types'

/**
 * Calculates stroke-dashoffset from a value 0 to 1
 * @param {number} value 0 to 1
 */
function getDashoffsetFromValue (circumference, progress) {
  var dashoffset = circumference * (1 - progress)
  return dashoffset
}

const LoadingAnimation = ({
  className = '',
  show = false,
  radius = 32,
  deg = 90,
  size = 32,
  withContainer,
  fullscreen
}) => {
  const circumference = 2 * Math.PI * radius
  const arc = deg / 360 // 0 to 1
  const strokeDashoffset = getDashoffsetFromValue(circumference, arc)
  const showClass = show ? 'show' : ''

  const Anim = (
    <span className={`loading-animation ${className} ${showClass}`}>
      <svg
        className='svg'
        style={{
          width: size,
          height: size
        }}
        viewBox={`0 0 ${size * 2} ${size * 2}`}
      >
        <circle
          className='circle background'
          cx={size}
          cy={size}
          fill='none'
          r={radius}
        />
        <circle
          cx={size}
          cy={size}
          fill='none'
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className='circle foreground'
        />
      </svg>
    </span>
  )

  return withContainer || fullscreen ? (
    <div
      className={`loading-animation-container row flex ${
        fullscreen ? 'fullscreen' : ''
      }`}
    >
      {Anim}
    </div>
  ) : (
    Anim
  )
}

LoadingAnimation.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  radius: PropTypes.number,
  deg: PropTypes.number,
  size: PropTypes.number,
  withContainer: PropTypes.bool,
  fullscreen: PropTypes.bool
}

export default LoadingAnimation

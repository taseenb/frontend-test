import React, { memo } from 'react'

function getStar (rating, i) {
  if (rating - i === 0.5) {
    return '◐'
  } else if (rating - i >= 1) {
    return '●'
  }
  return '○'
}

function Stars ({ rating }) {
  let str = ''

  for (let i = 0; i < rating; i++) {
    str += getStar(rating, i)
  }

  return <div className='stars'>{str}</div>
}

export default memo(Stars)

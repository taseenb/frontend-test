import React, { memo } from 'react'

function getStar (rating, i) {
  if (rating - i === 0.5) {
    return '◐'
  }

  return rating - i >= 1 ? '●' : '○'
}

function Stars ({ rating }) {
  let str = ''

  for (let i = 0; i < 5; i++) {
    str += getStar(rating, i)
  }

  return (
    <div className='stars' data-testid='stars'>
      {str}
    </div>
  )
}

export default memo(Stars)

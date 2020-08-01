import React from 'react'

import Stars from '../../shared/Stars'

export default function User ({ rating, text }) {
  return (
    <div className='review-content'>
      <Stars rating={rating} />
      <div className='text'>{text}</div>
    </div>
  )
}

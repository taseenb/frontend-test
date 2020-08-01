import React from 'react'

import Review from './Reviews/Review'

import data from '../../__mocks__/reviews.json'

const reviews = data.reviews

export default function Reviews () {
  return (
    <div className='detail-reviews row'>
      <div className='detail-reviews-count'>{data.total} Reviews</div>

      {reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  )
}

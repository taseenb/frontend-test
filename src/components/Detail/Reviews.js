import React from 'react'

import Review from './Reviews/Review'
import LoadingAnimation from '../shared/LoadingAnimation'
import HttpError from '../shared/HttpError'
import useYelpReviews from '../../hooks/useYelpReviews'

export default function Reviews ({ id, reviewCount }) {
  const { state, error = {}, data } = useYelpReviews(id)

  return (
    <div className='detail-reviews row'>
      <div className='detail-reviews-count'>{reviewCount} Reviews</div>

      {state === 'LOADING' && <LoadingAnimation show withContainer />}

      {state === 'ERROR' && (
        <HttpError inline status={error.status} message={error.statusText} />
      )}

      {state !== 'LOADING' &&
        state !== 'ERROR' &&
        data.reviews.map(review => <Review key={review.id} {...review} />)}
    </div>
  )
}

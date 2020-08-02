import React from 'react'

import Review from './Reviews/Review'
import Loading from '../shared/Loading'
import HttpError from '../shared/HttpError'
import useYelpReviews from '../../hooks/useYelpReviews'

export default function Reviews ({ id, reviewCount }) {
  const { state, error = {}, data } = useYelpReviews(id)

  return (
    <div className='detail-reviews row'>
      <div className='detail-reviews-count'>{reviewCount} Reviews</div>

      {state === 'LOADING' && <Loading />}

      {state === 'ERROR' && (
        <HttpError status={error.status} message={error.statusText} />
      )}

      {state !== 'LOADING' &&
        state !== 'ERROR' &&
        data.reviews.map(review => <Review key={review.id} {...review} />)}
    </div>
  )
}

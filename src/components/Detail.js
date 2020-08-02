import React from 'react'
import PropTypes from 'prop-types'

import useYelpDetails from '../hooks/useYelpDetails'

import Visuals from './Detail/Visuals'
import Reviews from './Detail/Reviews'
import Hero from './shared/Hero'
import HttpError from './shared/HttpError'
import LoadingAnimation from './shared/LoadingAnimation'

function Detail ({ location, match }) {
  const { id } = match.params
  const { state, error = {}, data } = useYelpDetails(id)

  if (state === 'LOADING') {
    return <LoadingAnimation show withContainer />
  }

  if (state === 'ERROR') {
    return (
      <HttpError fullscreen status={error.status} message={error.statusText} />
    )
  }

  const {
    // id,
    // alias,
    // url,
    name,
    categories,
    rating,
    price,
    is_closed: isClosed,
    photos,
    coordinates,
    location: restaurantLocation,
    review_count: reviewCount
  } = data

  return (
    <div className='detail'>
      <Hero
        headline={name}
        rating={rating}
        category={categories[0].title}
        price={price}
        isClosed={isClosed}
      />
      <Visuals
        photos={photos}
        location={restaurantLocation}
        coordinates={coordinates}
      />
      <Reviews id={id} reviewCount={reviewCount} />
    </div>
  )
}

Detail.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
}

export default Detail

import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Stars from './Stars'
import CatPrice from './CatPrice'
import Status from './Status'

function Hero ({
  headline,
  sub,
  rating = null,
  category,
  price,
  isClosed = null
}) {
  return (
    <div className='list-hero hero row'>
      {headline && <h1>{headline}</h1>}

      {sub && <p className='copy'>{sub}</p>}

      {rating !== null && <Stars rating={rating} />}

      {(category && price) || isClosed !== null ? (
        <div className='details'>
          {category && price && <CatPrice category={category} price={price} />}
          {isClosed !== null && <Status isClosed={isClosed} />}
        </div>
      ) : null}
    </div>
  )
}

Hero.propTypes = {
  headline: PropTypes.string,
  sub: PropTypes.string,
  rating: PropTypes.number,
  category: PropTypes.string,
  price: PropTypes.string,
  isClosed: PropTypes.bool
}

export default memo(Hero)

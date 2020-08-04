import React from 'react'
import { Link } from 'react-router-dom'

import Stars from '../shared/Stars'
import Status from '../shared/Status'
import CatPrice from '../shared/CatPrice'

export default function Item ({
  id,
  alias,
  name,
  image_url: imageUrl,
  is_closed: isClosed,
  url,
  review_count: reviewCount,
  categories,
  rating,
  coordinates,
  price,
  location,
  phone,
  display_phone: displayPhone,
  distance
}) {
  const to = `/restaurant/${id}`

  return (
    <div className='list-item' data-testid='list-item'>
      <div className='inner'>
        <Link to={to} className='image-wrapper'>
          <span
            className='image'
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </Link>

        <Link to={to} className='name'>
          {name}
        </Link>

        <div className='rating'>
          <Stars rating={rating} />
        </div>

        <div className='details'>
          <CatPrice category={categories[0].title} price={price} />

          <Status isClosed={isClosed} />
        </div>
      </div>

      <Link to={to} className='learn-more btn'>
        Learn more
      </Link>
    </div>
  )
}

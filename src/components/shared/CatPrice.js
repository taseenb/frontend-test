import React from 'react'
import PropTypes from 'prop-types'

export default function CatPrice ({ category, price }) {
  return (
    <div className='cat-price'>
      {category} &middot; {price}
    </div>
  )
}

CatPrice.propTypes = {
  category: PropTypes.string,
  price: PropTypes.string
}

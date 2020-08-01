import React from 'react'

export default function CatPrice ({ category, price }) {
  return (
    <div className='cat-price'>
      {category} &middot; {price}
    </div>
  )
}

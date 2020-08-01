import React from 'react'

import Status from './Filters/Status'
import Price from './Filters/Price'
import Category from './Filters/Category'

const isClosed = false

export default function Filters () {
  return (
    <div className='list-filters'>
      <div className='main-label'>Filter by:</div>
      <Status isClosed={isClosed} />
      <Price />
      <Category />
    </div>
  )
}

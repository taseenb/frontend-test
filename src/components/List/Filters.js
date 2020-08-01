import React from 'react'

import Status from './Filters/Status'
import Price from './Filters/Price'
import Category from './Filters/Category'

const isClosed = false

export default function Filters () {
  return (
    <div className='list-filters row flex with-separator'>
      <div className='main-label'>Filter by:</div>
      <Status isClosed={isClosed} />
      <Price />
      <Category />
    </div>
  )
}

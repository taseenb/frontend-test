import React from 'react'

import Status from './Filters/Status'
import Price from './Filters/Price'
import Category from './Filters/Category'
import ClearAll from './Filters/ClearAll'

function Filters ({
  searchParams,
  clientFilter,
  onUpdateClientFilter,
  apiParams,
  onUpdateApiParams,
  onResetFilters,
  cleared
}) {
  const { openNow, price } = clientFilter
  const { categories } = apiParams

  return (
    <div className='list-filters row flex with-separator'>
      <div className='list-filters-wrapper'>
        <div className='main-label'>Filter by:</div>
        <Status openNow={openNow} onChange={onUpdateClientFilter} />
        <Price price={price} onChange={onUpdateClientFilter} />
        <Category selected={categories} onChange={onUpdateApiParams} />
      </div>

      <ClearAll disabled={cleared} onResetFilters={onResetFilters} />
    </div>
  )
}

export default Filters

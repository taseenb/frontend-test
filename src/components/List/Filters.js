import React from 'react'
import { useDispatch } from 'react-redux'

import Status from './Filters/Status'
import Price from './Filters/Price'
import Category from './Filters/Category'
import ClearAll from './Filters/ClearAll'

import {
  resetClientFilters,
  updateClientFilters
} from '../../redux/client-filters/actions'
import { resetApiParams, updateApiParams } from '../../redux/api-params/actions'

function Filters ({ clientFilters, apiParams, cleared }) {
  const dispatch = useDispatch()
  const { openNow, price } = clientFilters
  const { categories } = apiParams

  /**
   * Update client filters (open now, price)
   * @param {object} newFilter New key and value
   */
  function onUpdateClientFilters (newFilter) {
    console.log(newFilter)
    dispatch(updateClientFilters(newFilter))
  }

  /**
   * Update API params (server filter) and reset data and offset when category changes
   * @param {object} newParam New key and value
   */
  function onUpdateApiParams (newParam) {
    const offset =
      newParam.categories !== apiParams.categories ? { offset: 0 } : {}

    dispatch(updateApiParams({ ...newParam, ...offset }))
  }

  /**
   * Clear all filters (both client and server), but not API offset!
   */
  function onResetFilters () {
    if (cleared) return

    dispatch(resetApiParams())
    dispatch(resetClientFilters())
  }

  return (
    <div className='list-filters row flex with-separator' data-testid='list-filters'>
      <div className='list-filters-wrapper'>
        <div className='main-label'>Filter by:</div>
        <Status openNow={openNow} onChange={onUpdateClientFilters} />
        <Price price={price} onChange={onUpdateClientFilters} />
        <Category selected={categories} onChange={onUpdateApiParams} />
      </div>

      <ClearAll disabled={cleared} onResetFilters={onResetFilters} />
    </div>
  )
}

export default Filters

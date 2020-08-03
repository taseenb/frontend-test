import React, { useState, useEffect } from 'react'

import isEqual from 'lodash/isEqual'

import Hero from './shared/Hero'
import Filters from './List/Filters'
import Results from './List/Results'
import LoadMore from './List/LoadMore'

// Yelp API search hook
import useYelpSearch from '../hooks/useYelpSearch'

// Store
import { useSelector, useDispatch } from 'react-redux'
import { selectClientFilters } from '../redux/client-filters/selectors'
import { selectApiParams } from '../redux/api-params/selectors'
import { updateApiParams } from '../redux/api-params/actions'
import { selectRestaurants } from '../redux/restaurants/selectors'
import { addItems } from '../redux/restaurants/actions'
import { INITIAL_STATE as defaultApiParams } from '../redux/api-params/reducer'
import { INITIAL_STATE as defaultClientFilters } from '../redux/client-filters/reducer'

function List () {
  const dispatch = useDispatch()

  // API and client filters
  const apiParams = useSelector(selectApiParams)
  const clientFilters = useSelector(selectClientFilters)

  // Get restaurants
  const { categories } = apiParams
  const items = useSelector(selectRestaurants(categories || 'all'))

  // Defines if there are more items available with the current
  // server side filters (based on Yelp API total value)
  const [moreAvailable, setMoreAvailable] = useState(false)

  // Defines if filters are using defaults
  const [filtersCleared, setFiltersCleared] = useState(true)

  // Get resaurants data from Yelp
  const { state: fetchState, error = {}, data } = useYelpSearch(apiParams)

  // console.log(apiParams, clientFilters, items)

  /**
   * Update the items store every time data from Yelp changes
   */
  useEffect(() => {
    if (data && data.businesses) {
      const { offset, categories, limit } = apiParams
      dispatch(addItems({ items: data.businesses, offset, limit, categories }))
    }
  }, [data])

  /**
   * Updates items availability information (based on th "total" value returned by Yelp)
   */
  useEffect(() => {
    if (data) {
      setMoreAvailable(items.length < data.total)
    }
  }, [items])

  /**
   * Test whether filters were cleared (default values)
   */
  useEffect(() => {
    // Ignore offset changes when checking filters!
    const cleared =
      isEqual({ ...apiParams, offset: 0 }, defaultApiParams) &&
      isEqual(clientFilters, defaultClientFilters)

    setFiltersCleared(cleared)
  }, [apiParams, clientFilters])

  /**
   * Load more restaurants from Yelp API
   */
  function onLoadMore () {
    if (fetchState === 'LOADING' || fetchState === 'ERROR') return

    if (items.length >= data.total) {
      console.log('No more restaurants available')
      setMoreAvailable(false)
      return
    }

    dispatch(updateApiParams({ offset: items.length }))
  }

  return (
    <div className='list'>
      <Hero
        headline='Restaurants'
        sub='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      />

      <Filters
        clientFilters={clientFilters}
        apiParams={apiParams}
        cleared={filtersCleared}
      />

      <Results
        clientFilters={clientFilters}
        fetchState={fetchState}
        error={error}
        items={items}
      />

      {moreAvailable && fetchState !== 'LOADING' && fetchState !== 'ERROR' && (
        <LoadMore loading={fetchState === 'LOADING'} onLoadMore={onLoadMore} />
      )}

      {/* {fetchState !== 'LOADING' && !moreAvailable && (
        <div className='list-end'>
          That's all. Change your filters to find more.
        </div>
      )} */}
    </div>
  )
}

export default List

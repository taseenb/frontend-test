import React, { useState, useEffect } from 'react'

import isEqual from 'lodash/isEqual'

import Hero from './shared/Hero'
import Filters from './List/Filters'
import Results from './List/Results'
import LoadMore from './List/LoadMore'

import useYelpSearch from '../hooks/useYelpSearch'

const defaultApiParams = Object.freeze({
  location: 'Las Vegas'.replace(' ', '+'),
  term: 'restaurants',
  offset: 0,
  limit: 20, // default 20, max 50
  categories: ''
})

const defaultClientFilter = Object.freeze({
  openNow: false,
  price: 0
})

function List () {
  // Filters: server API and client
  const [apiParams, setApiParams] = useState(defaultApiParams) // API params
  const [clientFilter, setClientFilter] = useState(defaultClientFilter) // Client filters

  // Defines if there are more items available with the current
  // server side filters (based on Yelp API total value)
  const [moreAvailable, setMoreAvailable] = useState(false)

  // Defines if filters are using defaults
  const [filtersCleared, setFiltersCleared] = useState(true)

  // Get resaurants data from Yelp
  const { state, error = {}, data } = useYelpSearch(apiParams)

  // The accumulated store of items received (should go to global state)
  const [items, setItems] = useState(null)

  /**
   * Update the items store and availability every time data from Yelp changes
   */
  useEffect(() => {
    if (data) {
      setMoreAvailable(data.businesses.length < data.total)
    }

    if (data && data.businesses) {
      if (Array.isArray(items)) {
        setItems([...items, ...data.businesses])
      } else {
        setItems(data.businesses)
      }
    }
  }, [data])

  /**
   * Test whether filters were cleared (default values)
   */
  useEffect(() => {
    // Ignore offset changes when checking filters!
    const cleared =
      isEqual({ ...apiParams, offset: 0 }, defaultApiParams) &&
      isEqual(clientFilter, defaultClientFilter)
    setFiltersCleared(cleared)
  }, [apiParams, clientFilter])

  /**
   * Load more restaurants from Yelp API
   */
  function onLoadMore () {
    if (state === 'LOADING' || state === 'ERROR') return

    if (items.length >= data.total) {
      console.log('No more restaurants available')
      setMoreAvailable(false)
      return
    }

    setApiParams({ ...apiParams, offset: items.length })
  }

  /**
   * Update client filters (open now, price)
   * @param {object} newFilter New key and value
   */
  function onUpdateClientFilter (newFilter) {
    setClientFilter({ ...clientFilter, ...newFilter })
  }

  /**
   * Update API params (server filter) and reset data and offset when category changes
   * @param {object} newParam New key and value
   */
  function onUpdateApiParams (newParam) {
    if (newParam.categories !== apiParams.categories) {
      setItems(null)
      setApiParams({ ...apiParams, ...newParam, offset: 0 })
    }
  }

  /**
   * Clear all filters (both client and server)
   */
  function onResetFilters () {
    if (filtersCleared) return

    onUpdateApiParams({ categories: '' })
    setClientFilter(defaultClientFilter)
  }

  return (
    <div className='list'>
      <Hero
        headline='Restaurants'
        sub='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      />

      <Filters
        clientFilter={clientFilter}
        onUpdateClientFilter={onUpdateClientFilter}
        apiParams={apiParams}
        onUpdateApiParams={onUpdateApiParams}
        onResetFilters={onResetFilters}
        cleared={filtersCleared}
      />

      <Results
        filter={clientFilter}
        state={state}
        error={error}
        items={items}
      />

      {moreAvailable && state !== 'LOADING' && state !== 'ERROR' && (
        <LoadMore state={state} onLoadMore={onLoadMore} />
      )}

      {state !== 'LOADING' && !moreAvailable && (
        <div className='list-end'>
          That's all. Change your filters to find more.
        </div>
      )}
    </div>
  )
}

export default List

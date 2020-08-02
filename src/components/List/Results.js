import React from 'react'

import Item from './Item'
import LoadingAnimation from '../shared/LoadingAnimation'
import HttpError from '../shared/HttpError'

function filterOpenNow (openNow, isClosed) {
  return (openNow && !isClosed) || !openNow
}

function filterPrice (price, itemPrice) {
  return !price || (typeof itemPrice === 'string' && price === itemPrice.length)
}

function Results ({ items, error, state, filter }) {
  const { openNow, price } = filter

  const filteredItems = Array.isArray(items)
    ? items.filter(item => {
        if (
          !filterOpenNow(openNow, item.is_closed) ||
          !filterPrice(price, item.price)
        ) {
          return false
        }
        return true
      })
    : null

  return (
    <div className='list-results row'>
      <h2>All Restaurants</h2>

      {filteredItems && filteredItems.length ? (
        <div className='list-results-grid'>
          {filteredItems.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      ) : state === 'LOADING' ? null : (
        <div className='list-results-nothing'>
          No items found. Check your filters!
        </div>
      )}

      {state === 'LOADING' && <LoadingAnimation show withContainer />}

      {state === 'ERROR' && (
        <HttpError status={error.status} message={error.statusText} />
      )}
    </div>
  )
}

export default Results

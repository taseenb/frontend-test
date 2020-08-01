import React from 'react'
import data from '../../__mocks__/data.json'

import Item from './Item'

export default function Results () {
  const items = data.businesses

  return (
    <div className='list-results row'>
      <h2>All Restaurants</h2>

      <div className='list-results-grid'>
        {items
          ? items.map(item => <Item key={item.id} {...item} />)
          : 'Loading...'}
      </div>
    </div>
  )
}

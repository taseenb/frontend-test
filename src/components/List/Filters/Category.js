import React from 'react'
import Select from '../../shared/Select'

import data from '../../../__mocks__/categories.json'

const restaurants = data.categories.filter(cat => cat.parent_aliases[0] === 'restaurants')

console.log(restaurants)

const options = [
  { value: 'chinese', copy: 'Chinese', selected: false },
  { value: 'vietnamese', copy: 'Vietnamese', selected: true },
  { value: 'sushi', copy: 'Sushi', selected: false }
]

export default function Category () {
  return (
    <div className='category-filter filter'>
      {/* <span className='label'>Categories</span> */}

      <Select triggerCopy='Categories' options={options} />
    </div>
  )
}

import React from 'react'
import Select from '../../shared/Select'

import restaurants from './categories.json'

// Get options array from Yelp categories json
const defaultOptions = [
  { value: '', copy: 'All', selected: true, default: true }
].concat(
  restaurants.map(r => {
    return { value: r.alias, copy: r.title, selected: false }
  })
)

function Category ({ selected, onChange }) {
  const filteredOptions = defaultOptions.map(option => {
    return {
      ...option,
      selected: selected === option.value
    }
  })

  function onSelectChange (value) {
    onChange({ categories: value })
  }

  return (
    <div className='category-filter filter'>
      <Select
        triggerLabel='Categories'
        options={filteredOptions}
        className='category-filter-select'
        onChange={onSelectChange}
        scrollable
      />
    </div>
  )
}

export default Category

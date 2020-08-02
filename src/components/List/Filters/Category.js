import React from 'react'
import Select from '../../shared/Select'

// import data from '../../../__mocks__/categories.json'
// const restaurants = data.categories.filter(cat => cat.parent_aliases[0] === 'restaurants')
// console.log(restaurants)

const defaultOptions = [
  { value: '', copy: 'All', selected: true, default: true },
  { value: 'italian', copy: 'Italian', selected: false },
  { value: 'seafood', copy: 'Seafood', selected: false },
  { value: 'steak', copy: 'Steakhouses', selected: false },
  { value: 'japanese', copy: 'Japanese', selected: false },
  { value: 'tradamerican,newamerican', copy: 'American', selected: false },
  { value: 'mexican', copy: 'Mexican', selected: false },
  { value: 'thai', copy: 'Thai', selected: false }
]

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
      />
    </div>
  )
}

export default Category

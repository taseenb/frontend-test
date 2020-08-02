import React from 'react'
import Select from '../../shared/Select'

const defaultOptions = [
  { value: 0, copy: 'All', selected: true, default: true },
  { value: 1, copy: '$', selected: false },
  { value: 2, copy: '$$', selected: false },
  { value: 3, copy: '$$$', selected: false },
  { value: 4, copy: '$$$$', selected: false }
]

function Price ({ price, onChange }) {
  const filteredOptions = defaultOptions.map(option => {
    return {
      ...option,
      selected: price === option.value
    }
  })

  function onSelectChange (value) {
    onChange({ price: value })
  }

  return (
    <div className='price-filter filter'>
      <Select
        triggerLabel='Price'
        options={filteredOptions}
        className='price-filter-select'
        onChange={onSelectChange}
      />
    </div>
  )
}

export default Price

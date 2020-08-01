import React from 'react'
import Select from '../../shared/Select'

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

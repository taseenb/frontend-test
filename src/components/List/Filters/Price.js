import React from 'react'
import Select from '../../shared/Select'

const options = [
  { value: 'all', copy: 'All', selected: true },
  { value: '1', copy: '$', selected: false },
  { value: '2', copy: '$$', selected: false },
  { value: '3', copy: '$$$', selected: false },
  { value: '4', copy: '$$$$', selected: false }
]

export default function Price () {
  

  return (
    <div className='price-filter filter'>
      {/* <span className='label'>Price</span> */}

      <Select triggerCopy='Price' options={options} />
    </div>
  )
}

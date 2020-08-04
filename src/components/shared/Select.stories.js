import React from 'react'
import Select from './Select'

import '../../styles/components/shared/Select.sass'

const options = [
  { value: '', copy: 'All', selected: true, default: true },
  { value: 'italian', copy: 'Italian', selected: false },
  { value: 'seafood', copy: 'Seafood', selected: false },
  { value: 'steak', copy: 'Steakhouses', selected: false },
  { value: 'japanese', copy: 'Japanese', selected: false },
  { value: 'tradamerican,newamerican', copy: 'American', selected: false },
  { value: 'mexican', copy: 'Mexican', selected: false },
  { value: 'thai', copy: 'Thai', selected: false }
]

export default { title: 'Select' }

export const basic = () => (
  <Select triggerLabel='Categories' options={options} />
)

import React from 'react'
import Radio from './Radio'

import '../../styles/components/shared/Radio.sass'

export default { title: 'Radio' }

export const on = () => <Radio checked />
export const off = () => <Radio />

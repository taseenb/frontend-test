import React from 'react'
import Status from './Status'

import '../../styles/components/shared/Status.sass'

export default { title: 'Status' }

export const closed = () => <Status isClosed />
export const open = () => <Status />

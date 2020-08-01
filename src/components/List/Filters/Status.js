import React from 'react'
import Radio from '../../shared/Radio'

export default function Status ({ isClosed }) {
  function toggleStatus () {
    console.log('toggle status')
  }

  return (
    <div className='status-filter filter' onClick={toggleStatus}>
      <Radio checked={!isClosed} />
      <span className='label'>Open Now</span>
    </div>
  )
}

import React from 'react'
import Radio from '../../shared/Radio'

export default function Status ({ openNow, onChange }) {
  function toggleStatus () {
    onChange({ openNow: !openNow })
  }

  return (
    <div className='status-filter filter' onClick={toggleStatus}>
      <Radio checked={openNow} />
      <span className='label'>Open Now</span>
    </div>
  )
}

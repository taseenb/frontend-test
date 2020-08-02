import React from 'react'
import Radio from '../../shared/Radio'

export default function Status ({ openNow, onChange }) {
  return (
    <div
      className='status-filter filter'
      onClick={() => onChange({ openNow: !openNow })}
    >
      <Radio checked={openNow} />
      <span className='label'>Open Now</span>
    </div>
  )
}

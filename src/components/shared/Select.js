import React, { useState } from 'react'

export default function Select ({ triggerCopy, options }) {
  const [open, setOpen] = useState(false)

  function toggle () {
    setOpen(!open)
  }

  return (
    <div className='custom-select-wrapper' onClick={toggle}>
      <div className={`custom-select ${open ? 'open' : ''}`}>
        <div className='custom-select-trigger'>
          <span>{triggerCopy}</span>
          <div className='arrow' />
        </div>
        <div className='custom-options'>
          {options.map((option, i) => (
            <span
              key={option.value + i}
              className={`custom-option ${option.selected ? 'selected' : ''}`}
              data-value={option.value}
            >
              {option.copy}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

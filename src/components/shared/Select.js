import React, { useState, useEffect } from 'react'

function Select ({ triggerLabel, options, onChange, className }) {
  const [open, setOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState(null)

  useEffect(() => {
    const selected = options.find(o => o.selected)

    console.log(options)

    if (selected && !selected.default) {
      setSelectedLabel(selected.copy)
    } else {
      setSelectedLabel(triggerLabel)
    }
  }, [options])

  function toggle () {
    setOpen(!open)
  }

  return (
    <div
      className={`custom-select-wrapper ${className || ''}`}
      onClick={toggle}
    >
      <div className={`custom-select ${open ? 'open' : ''}`}>
        <div className='custom-select-trigger'>
          <span>{selectedLabel || triggerLabel}</span>
          <div className='arrow' />
        </div>
        <div className='custom-options'>
          {options.map((option, i) => (
            <span
              key={option.value + i}
              className={`custom-option ${option.selected ? 'selected' : ''}`}
              data-value={option.value}
              onClick={e => onChange(option.value)}
            >
              <span className='bullet'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24px'
                  height='24px'
                  className='svg'
                >
                  <path
                    fill='none'
                    fillRule='evenodd'
                    strokeMiterlimit='10'
                    strokeWidth='2'
                    d='M18.107 7.893L11 15 7 11'
                    clipRule='evenodd'
                  />
                </svg>
              </span>{' '}
              <span className='label'>{option.copy}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Select

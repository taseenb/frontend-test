import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import useClickOutside from '../../hooks/useClickOutside'

function Select ({ triggerLabel, options, onChange, scrollable, className }) {
  const [open, setOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState(null)
  const selectEl = useRef(null)
  const clickedOutside = useClickOutside(selectEl.current, open)

  useEffect(() => {
    const selected = options.find(o => o.selected)

    if (selected && !selected.default) {
      setSelectedLabel(selected.copy)
    } else {
      setSelectedLabel(triggerLabel)
    }
  }, [options])

  useEffect(() => {
    if (clickedOutside && open) {
      toggle()
    }
  }, [clickedOutside])

  function toggle () {
    setOpen(!open)
  }

  return (
    <div
      className={`custom-select-wrapper ${className || ''}`}
      // onClick={toggle}
    >
      <div
        className={`custom-select ${scrollable ? 'scrollable' : ''} ${
          open ? 'open' : ''
        }`}
      >
        <div className='custom-select-trigger' ref={selectEl} onClick={toggle}>
          <span
            className={selectedLabel !== triggerLabel ? 'user-selected' : ''}
          >
            {selectedLabel || triggerLabel}
          </span>
          <div className='arrow' />
        </div>
        <div className='custom-options'>
          {options.map((option, i) => (
            <span
              key={option.value + i}
              className={`custom-option ${option.selected ? 'selected' : ''}`}
              data-value={option.value}
              onClick={onChange ? e => onChange(option.value) : null}
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

Select.propTypes = {
  triggerLabel: PropTypes.string,
  options: PropTypes.object,
  onChange: PropTypes.func,
  scrollable: PropTypes.bool,
  className: PropTypes.string
}

export default Select

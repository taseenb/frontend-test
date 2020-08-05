import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function Select ({ triggerLabel, options, onChange, scrollable, className }) {
  const [open, setOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState(null)
  const selectEl = useRef(null)

  // Traverse the DOM up to the document root to determine
  // if the click happened inside the dropdown
  const isClickOutside = (el, clickedElement) => {
    let targetElement = clickedElement
    do {
      if (targetElement === el) {
        // Click is inside: do nothing
        return
      }
      targetElement = targetElement.parentNode
    } while (targetElement)

    // Click is outside: close
    setOpen(false)
  }

  // Close the dropdown if user clicks outside
  useEffect(() => {
    const handler = e => isClickOutside(selectEl, e.target)
    const add = () => document.addEventListener('click', handler)
    const remove = () => document.removeEventListener('click', handler)
    if (open) {
      add()
    } else {
      remove()
    }
    return remove
  }, [open])

  // Update label based on the selected option
  useEffect(() => {
    const selected = options.find(o => o.selected)

    if (selected && !selected.default) {
      setSelectedLabel(selected.copy)
    } else {
      setSelectedLabel(triggerLabel)
    }
  }, [options])

  // Toggle open/close (click handler)
  function toggle () {
    setOpen(!open)
  }

  return (
    <div className={`custom-select-wrapper ${className || ''}`}>
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
  options: PropTypes.array,
  onChange: PropTypes.func,
  scrollable: PropTypes.bool,
  className: PropTypes.string
}

export default Select

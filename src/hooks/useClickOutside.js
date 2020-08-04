import { useState, useEffect } from 'react'

/**
 * To detect a click outside an element we must add a listener on the whole document element. Then the main loop goes up the DOM from the clicked target element to find whether an ancestor of the clicked element belongs to the flyout container.
 * @param {HTMLElement} clickedElement
 * @param {HTMLElement} el
 */
export const isClickOutside = (el, clickedElement, setIsOutside) => {
  let targetElement = clickedElement

  console.log('click')

  do {
    if (targetElement === el) {
      // This is a click inside el
      setIsOutside(false)
    }
    // Go up the DOM
    targetElement = targetElement.parentNode
  } while (targetElement)

  // This is a click outside el
  setIsOutside(true)
}

export default function useClickOutside (el, active) {
  const [isOutside, setIsOutside] = useState(active)

  useEffect(() => {
    const handler = e => isClickOutside(el, e.target, setIsOutside)
    const add = () => document.addEventListener('click', handler)
    const remove = () => document.removeEventListener('click', handler)

    if (el && active) {
      add()
    } else {
      remove()
      setIsOutside(false)
    }

    return remove
  }, [el, active])

  return isOutside
}

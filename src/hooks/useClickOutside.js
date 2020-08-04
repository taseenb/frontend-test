import { useState, useEffect } from 'react'

const isClickOutside = (el, clickedElement, setIsOutside) => {
  let targetElement = clickedElement

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

/**
 * To detect a click outside an HTMLElement (el) we must add a
 * listener on the document element.
 * Then we loop traverse the DOM up from the clicked element to find whether
 * an ancestor of the clicked element belongs to el.
 * @param {HTMLElement} el
 * @param {boolean} active Enable/disable the listener
 */
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

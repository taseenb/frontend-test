/**
 * To detect a click outside an element we must add a listener on the whole document element. Then the main loop goes up the DOM from the clicked target element to find whether an ancestor of the clicked element belongs to the flyout container.
 * @param {HTMLElement} clickedElement
 * @param {HTMLElement} el
 */
export const isClickOutside = (el, clickedElement) => {
  let targetElement = clickedElement

  do {
    if (targetElement === el) {
      // This is a click inside el
      return false
    }
    // Go up the DOM
    targetElement = targetElement.parentNode
  } while (targetElement)

  // This is a click outside el
  return true
}

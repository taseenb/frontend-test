/**
 * Add restaurnts to the right category when fetched from Yelp's API
 * @param {object} state
 * @param {object} payload
 */
export const addItems = (state, payload) => {
  const { items, offset, limit, categories } = payload

  const cat = categories || 'all'
  const existingItems = state[cat]
  const newState = { ...state }

  if (!existingItems || existingItems.length === 0) {
    newState[cat] = items
  } else if (Array.isArray(existingItems)) {
    // copy the existing array
    newState[cat] = [...existingItems]

    // REPLACE the new items depending on offset and limit
    newState[cat].splice(offset, limit, ...items)
  }

  return newState
}

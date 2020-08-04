import { addItems } from './utils'

import types from './action-types'
const { ADD_ITEMS } = types

/**
 * Every Yelp category fetched will be stored in a different key
 * The category "all" stores the default results (all categories)
 */
export const INITIAL_STATE = {
  all: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return addItems(state, action.payload)

    default:
      return state
  }
}

export default cartReducer

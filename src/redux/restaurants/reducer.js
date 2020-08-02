import { RestaurantsActionTypes } from './types'
import { addItems } from './utils'

/**
 * Every Yelp category fetched will be stored in a different key
 * The category "all" stores the default results (all categories)
 */
const INITIAL_STATE = {
  all: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RestaurantsActionTypes.ADD_ITEMS:
      return addItems(state, action.payload)

    default:
      return state
  }
}

export default cartReducer

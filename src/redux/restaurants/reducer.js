import { RestaurantsActionTypes } from './types'

const INITIAL_STATE = []

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RestaurantsActionTypes.ADD_ITEMS:
      return [...state, ...action.payload]

    case RestaurantsActionTypes.REPLACE_ITEMS:
      return action.payload

    case RestaurantsActionTypes.RESET_ITEMS:
      return INITIAL_STATE

    default:
      return state
  }
}

export default cartReducer

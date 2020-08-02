import { RestaurantsActionTypes } from './types'

export const addItems = items => {
  return { type: RestaurantsActionTypes.ADD_ITEMS, payload: items }
}

export const replaceItems = items => {
  return { type: RestaurantsActionTypes.REPLACE_ITEMS, payload: items }
}

export const reset = () => {
  return { type: RestaurantsActionTypes.RESET_ITEMS }
}

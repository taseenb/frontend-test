import { ClientFiltersActionTypes } from './types'

export const INITIAL_STATE = Object.freeze({
  openNow: false,
  price: 0
})

const clientFiltersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientFiltersActionTypes.UPDATE_CLIENT_FILTERS:
      return {
        ...state,
        ...action.payload
      }

    case ClientFiltersActionTypes.RESET_CLIENT_FILTERS:
      return INITIAL_STATE

    default:
      return state
  }
}

export default clientFiltersReducer

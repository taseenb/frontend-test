import { ClientFiltersActionTypes } from './types'

export const INITIAL_STATE = Object.freeze({
  openNow: false,
  price: 0
})

const clientFiltersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClientFiltersActionTypes.UPDATE:
      return {
        ...state,
        ...action.payload
      }

    case ClientFiltersActionTypes.RESET:
      return {
        ...INITIAL_STATE
      }

    default:
      return state
  }
}

export default clientFiltersReducer

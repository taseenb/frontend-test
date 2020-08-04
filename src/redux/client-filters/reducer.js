import types from './action-types'

const { UPDATE_CLIENT_FILTERS, RESET_CLIENT_FILTERS } = types

export const INITIAL_STATE = Object.freeze({
  openNow: false,
  price: 0
})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CLIENT_FILTERS:
      return {
        ...state,
        ...action.payload
      }

    case RESET_CLIENT_FILTERS:
      return INITIAL_STATE

    default:
      return state
  }
}

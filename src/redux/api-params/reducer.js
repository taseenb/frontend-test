import types from './action-types'
const { RESET_API_PARAMS, UPDATE_API_PARAMS } = types

export const INITIAL_STATE = Object.freeze({
  location: 'Las+Vegas',
  term: 'restaurants',
  offset: 0,
  limit: 8, // default 20, max 50
  categories: ''
})

const apiParamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_API_PARAMS:
      return {
        ...state,
        ...action.payload
      }

    case RESET_API_PARAMS:
      return INITIAL_STATE

    default:
      return state
  }
}

export default apiParamsReducer

import { ApiParamsActionTypes } from './types'

export const INITIAL_STATE = Object.freeze({
  location: 'Las+Vegas',
  term: 'restaurants',
  offset: 0,
  limit: 8, // default 20, max 50
  categories: ''
})

const apiParamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ApiParamsActionTypes.UPDATE_API_PARAMS:
      return {
        ...state,
        ...action.payload
      }

    case ApiParamsActionTypes.RESET_API_PARAMS:
      return INITIAL_STATE

    default:
      return state
  }
}

export default apiParamsReducer

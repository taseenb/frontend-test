import { ApiParamsActionTypes } from './types'

export const INITIAL_STATE = Object.freeze({
  location: 'Las+Vegas',
  term: 'restaurants',
  offset: 0,
  limit: 20, // default 20, max 50
  categories: ''
})

const apiParamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ApiParamsActionTypes.UPDATE:
      return {
        ...state,
        ...action.payload
      }

    case ApiParamsActionTypes.RESET:
      return {
        ...INITIAL_STATE
      }

    default:
      return state
  }
}

export default apiParamsReducer

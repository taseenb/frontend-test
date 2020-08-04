import types from './action-types'
const { ADD_ITEMS } = types

export const addItems = items => {
  return { type: ADD_ITEMS, payload: items }
}

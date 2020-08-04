import types from './action-types'
const { RESET_API_PARAMS, UPDATE_API_PARAMS } = types

/**
 * Reset client filters to default value
 */
export const resetApiParams = () => {
  return { type: RESET_API_PARAMS }
}

/**
 * Update a filter
 * @param {object} filter Key/Value pair of the filter to be updated
 */
export const updateApiParams = filter => {
  return { type: UPDATE_API_PARAMS, payload: filter }
}

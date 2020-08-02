import { ApiParamsActionTypes } from './types'

/**
 * Reset client filters to default value
 */
export const resetApiParams = () => {
  return { type: ApiParamsActionTypes.RESET }
}

/**
 * Update a filter
 * @param {object} filter Key/Value pair of the filter to be updated
 */
export const updateApiParams = filter => {
  return { type: ApiParamsActionTypes.UPDATE, payload: filter }
}

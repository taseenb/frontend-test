import { ClientFiltersActionTypes } from './types'

/**
 * Reset client filters to default value
 */
export const resetClientFilters = () => {
  return { type: ClientFiltersActionTypes.RESET_CLIENT_FILTERS }
}

/**
 * Update a filter
 * @param {object} filter Key/Value pair of the filter to be updated
 */
export const updateClientFilters = filter => {
  return { type: ClientFiltersActionTypes.UPDATE_CLIENT_FILTERS, payload: filter }
}

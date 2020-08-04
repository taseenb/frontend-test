import types from './action-types'

const { UPDATE_CLIENT_FILTERS, RESET_CLIENT_FILTERS } = types

/**
 * Reset client filters to default value
 */
export const resetClientFilters = () => {
  return { type: RESET_CLIENT_FILTERS }
}

/**
 * Update a filter
 * @param {object} filter Key/Value pair of the filter to be updated
 */
export const updateClientFilters = filter => {
  return { type: UPDATE_CLIENT_FILTERS, payload: filter }
}

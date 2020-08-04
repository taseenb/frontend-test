import { createSelector } from 'reselect'

// Input selectors
export const selectAllRestaurants = state => state.restaurants

// Output selectors
export const selectRestaurants = categories => {
  return createSelector([selectAllRestaurants], restaurants => {
    return restaurants[categories] || []
  })
}

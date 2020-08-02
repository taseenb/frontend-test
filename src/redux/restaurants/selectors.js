import { createSelector } from 'reselect'

// Input selectors
export const selectAllRestaurants = state => state.restaurants

// Output selectors
export const selectRestaurants = categories => {
  // console.log(categories)
  return createSelector([selectAllRestaurants], restaurants => {
    // console.log(restaurants, restaurants[categories])
    return restaurants[categories] || []
  })
}

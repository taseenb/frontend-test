// import { createSelector } from 'reselect'

// Input selectors
// Functions that simply returns a slice of the state
export const selectRestaurants = state => state.restaurants
// export const selectItems = state => state.cart.items

// Output selectors
// Functions that use createSelector (also from multiple slices of the state)
// and return the result of a calculation on the state

// export const selectItemsCount = createSelector([selectItems], items =>
//   items.reduce((acc, item) => acc + item.quantity, 0)
// )

// export const selectCartTotal = createSelector([selectItems], items =>
//   items.reduce((acc, item) => acc + item.price * item.quantity, 0)
// )

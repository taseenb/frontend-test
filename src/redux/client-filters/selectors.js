// import { createSelector } from 'reselect'

// Input selectors
// Functions that simply returns a slice of the state
export const selectClientFilters = state => state.clientFilters
export const selectPriceFilter = state => state.clientFilters.price
export const selectOpenNowFilter = state => state.clientFilters.openNow

// Output selectors
// Functions that use createSelector (also from multiple slices of the state)
// and return the result of a calculation on the state

// Examples:
// export const selectCount = createSelector([selectItems], items =>
//   items.reduce((acc, item) => acc + item.quantity, 0)
// )

// export const selectTotal = createSelector([selectItems], items =>
//   items.reduce((acc, item) => acc + item.price * item.quantity, 0)
// )

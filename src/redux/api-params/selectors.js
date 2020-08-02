// import { createSelector } from 'reselect'

// Input selectors
// Functions that simply returns a slice of the state
export const selectApiParams = state => state.apiParams
export const selectCategories = state => state.apiParams.categories
export const selectOffset = state => state.apiParams.offset

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

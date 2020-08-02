import { combineReducers } from 'redux'
import clientFilters from './client-filters/reducer'
import apiParams from './api-params/reducer'
// import restaurants from './restaurants/restaurants.reducer'

const rootReducer = combineReducers({
  apiParams,
  clientFilters
  // restaurants
})

export default rootReducer

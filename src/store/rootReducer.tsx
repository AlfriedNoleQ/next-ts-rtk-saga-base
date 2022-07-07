import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from '@modules/HomePageModule/slice'

const rootReducer = combineReducers({
  reviews: homeReducer
})

export default rootReducer

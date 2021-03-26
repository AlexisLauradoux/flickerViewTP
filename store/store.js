import { configureStore } from '@reduxjs/toolkit'
import filmReducer from './film'

export default configureStore({
  reducer: {
    film: filmReducer
  }
})
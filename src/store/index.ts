import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../slices/authSlice'

const reducer = {
  auth: authReducer,
}

const store = configureStore({
  reducer,
  devTools: true,
})

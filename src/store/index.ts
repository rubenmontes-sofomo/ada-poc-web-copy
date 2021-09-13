import { configureStore } from '@reduxjs/toolkit'

import triageReducer from '../features/triages/triagesSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    triages: triageReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

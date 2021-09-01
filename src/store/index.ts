import { configureStore } from '@reduxjs/toolkit'

import triageReducer from '../features/triages/triagesSlice'

export const store = configureStore({
  reducer: {
    triages: triageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

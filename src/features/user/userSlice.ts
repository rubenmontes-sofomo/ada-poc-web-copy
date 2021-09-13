import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../store'

interface UserState {
  email: string
  loggedIn: boolean
}

const initialState: UserState = {
  email: '',
  loggedIn: false,
}

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.loggedIn = true
    },
    setEmail(state, action) {
      state.email = action.payload
    },
  },
})

export const { login, setEmail } = usersSlice.actions

export const selectEmail = (state: RootState) => state.user.email
export const selectLoggedIn = (state: RootState) => state.user.loggedIn

export default usersSlice.reducer

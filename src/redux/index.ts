import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/slice'

export const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch

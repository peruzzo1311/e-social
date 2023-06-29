import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IUserInfo from '../../interfaces/IUserInfo'

export const userInitialState = {
  username: '',
  fullName: '',
  email: '',
  tenantDomain: '',
  tenantName: '',
  accessToken: '',
  password: '',
} as IUserInfo

export const userSlice = createSlice({
  name: 'set',
  initialState: userInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserInfo>) => {
      state.username = action.payload.username
      state.fullName = action.payload.fullName
      state.email = action.payload.email
      state.tenantDomain = action.payload.tenantDomain
      state.tenantName = action.payload.tenantName
      state.accessToken = action.payload.accessToken
      state.password = action.payload.password
    },
  },
})

export const { setUser } = userSlice.actions

export const selectUser = (state: IUserInfo) => state

export default userSlice.reducer

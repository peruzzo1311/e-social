import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IUser } from '../interfaces/IUser';

const userState: IUser = {
  username: '',
};

const userSlice = createSlice({
  name: 'setUser',
  initialState: userState,
  reducers: {
    setUser(state: IUser, action: PayloadAction<IUser>) {
      state.username = action.payload.username;
    },
  },
});

const reducer = combineReducers({
  user: userSlice.reducer,
});

export const Store = configureStore({
  reducer: reducer,
});

export const { setUser } = userSlice.actions;

export type StoreState = ReturnType<typeof Store.getState>;
export type StoreDispatch = typeof Store.dispatch;

import {UserResource} from "../../api/resources/user-resource";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {checkAuthThunk} from "../thunks/check-auth-thunk";

interface UserReducerState {
  /*
   * Текущий пользователь
   */
  user: UserResource | null;
  /*
   * Флаг отвечающий за загрузку информации о пользователе
   */
  isLoading: boolean;
  /*
   * Флаг отвечающий за ошибку загрузки информации о пользователе
   */
  isError: boolean;
}

const userReducerState: UserReducerState = {
  user: null,
  isLoading: false,
  isError: false
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState: userReducerState,
  reducers: {
    setUser: (state, action: PayloadAction<UserResource | null>) => {
      state.user = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(checkAuthThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(checkAuthThunk.fulfilled, (state, action:PayloadAction<UserResource>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(checkAuthThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
  }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

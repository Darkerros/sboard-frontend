import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginUserThunk } from '../thunks/login-user-thunk';

interface LoginFormReducerState {
  /*
   * Обьект с полями и их ошибками валидации
   */
  validationErrors: Record<string, string>;
  /*
   * Ошибка возникшая при авторизации
   */
  error: string | null;
}

const loginFormReducerState: LoginFormReducerState = {
  validationErrors: {},
  error: null,
};

const loginFormSlice = createSlice({
  name: 'loginFormReducer',
  initialState: loginFormReducerState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.fulfilled, (state) => {
        state.validationErrors = {};
        state.error = null;
      })
      .addCase(loginUserThunk.rejected, (state, action: PayloadAction<any>) => {
        state.validationErrors = action.payload?.validationErrors;
        state.error = action.payload?.registerError;
      });
  },
});

export const loginFormReducer = loginFormSlice.reducer;
export const loginFormActions = loginFormSlice.actions;

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {registrateUserThunk} from "../thunks/registrateUserThunk";

interface RegisterFormReducerState {
  /*
   * Обьект с полями и их ошибками валидации
   */
  validationErrors: Record<string, string>;
  /*
   * Ошибка возникшая при регистрации
   */
  error: string | null;
}

const registerFormReducerState: RegisterFormReducerState = {
  validationErrors: {},
  error: null,
}

const registerFormSlice = createSlice({
  name: 'registerFormReducer',
  initialState: registerFormReducerState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registrateUserThunk.fulfilled, (state) => {
        state.validationErrors = {};
        state.error = null;
      })
      .addCase(registrateUserThunk.rejected, (state, action: PayloadAction<any>) => {
        state.validationErrors = action.payload?.validationErrors;
        state.error = action.payload?.registerError;
      })
  }
})

export const registerFormReducer = registerFormSlice.reducer;
export const registerFormActions = registerFormSlice.actions;

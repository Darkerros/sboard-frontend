import { createAsyncThunk } from '@reduxjs/toolkit';

import { ILoginUserParams, loginUser } from '../../api/auth-api/auth-api';

export const loginUserThunk = createAsyncThunk(
  'loginUserThunk',
  async (registrateData: ILoginUserParams, { rejectWithValue }) => {
    try {
      return await loginUser(registrateData);
    } catch (err: any) {
      const { response: { status, data } } = err;

      let validationErrors: Record<string, string> = {};
      let registerError: (null | string) = null;

      if (status !== 400) {
        registerError = data.message;
      }

      validationErrors = data?.errors || {};

      return rejectWithValue({ validationErrors, registerError });
    }
  });

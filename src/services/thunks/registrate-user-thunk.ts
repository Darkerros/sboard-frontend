import { createAsyncThunk } from '@reduxjs/toolkit';

import { IRegisterUserParams } from '../../api/auth-api/auth-api';

import { registerUser } from '../../api';

export const registrateUserThunk = createAsyncThunk(
  'registerUserThunk',
  async (registrateData: IRegisterUserParams, { rejectWithValue }) => {
    try {
      return await registerUser(registrateData);
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

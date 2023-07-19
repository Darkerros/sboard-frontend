import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from '../../api';

export const checkAuthThunk = createAsyncThunk(
  'checkAuthTunk',
  () => getUser(),
);

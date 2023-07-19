import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUpdatePostParams, updatePost } from '../../api/post-api/post-api';

export const updatePostThunk = createAsyncThunk(
  'updatePostThunk',
  async (postUpdateData: IUpdatePostParams, { rejectWithValue }) => {
    try {
      return await updatePost(postUpdateData);
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

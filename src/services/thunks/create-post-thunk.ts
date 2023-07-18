import {createAsyncThunk} from "@reduxjs/toolkit";
import {createPost, ICreatePostParams} from "../../api/post-api/post-api";

export const createPostThunk = createAsyncThunk(
  'createPostThunk',
  async (postData: ICreatePostParams, {rejectWithValue}) => {
    try {
      return await createPost(postData)
    } catch (err: any) {
      const {response: {status, data}} = err;

      let validationErrors: Record<string, string> = {};
      let registerError: (null | string) = null;

      if (status !== 400) {
        registerError = data.message
      }

      validationErrors = data?.errors || {};

      return rejectWithValue({ validationErrors, registerError })
    }
  })

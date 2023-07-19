import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getPosts } from '../../api';

export const getPostsNextPage = createAsyncThunk(
  'getPostsNExtPage',
  (data, { getState }) => {
    const {
      posts: {
        currentPage,
      },
    } = getState() as RootState;

    return getPosts(undefined, undefined, currentPage + 1);
  },
);

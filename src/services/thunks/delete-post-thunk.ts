import { createAsyncThunk } from '@reduxjs/toolkit';
import { deletePost } from '../../api/post-api/post-api';

export const deletePostThunk = createAsyncThunk(
  'deletePostThunk',
  async (postId: number) => (await deletePost(postId)));

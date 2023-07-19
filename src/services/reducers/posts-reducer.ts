import { createSlice } from '@reduxjs/toolkit';

import { PostResource } from '../../api/resources/post-resource';

import { getPostsThunk } from '../thunks/get-post-thunk';
import { getPostsNextPage } from '../thunks/get-posts-next-page';
import { deletePostThunk } from '../thunks/delete-post-thunk';
import { updatePostThunk } from '../thunks/update-post-thunk';

interface PostsReducerState {
  posts: PostResource[];
  pagesCount: number;
  postsCount: number;
  currentPage: number;
  isHaveNextPage: boolean;
}

const postsReducerState: PostsReducerState = {
  posts: [],
  pagesCount: 0,
  postsCount: 0,
  currentPage: 1,
  isHaveNextPage: false,
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState: postsReducerState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.currentPage = 1;
        state.postsCount = action.payload.postCount;
        state.pagesCount = action.payload.pagesCount;
        state.isHaveNextPage = state.currentPage < action.payload.pagesCount;
      })
      .addCase(getPostsNextPage.fulfilled, (state, action) => {
        state.currentPage++;
        state.posts.push(...action.payload.posts);
        state.isHaveNextPage = state.currentPage < state.pagesCount;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.meta.arg);
      })
      .addCase(updatePostThunk.fulfilled, (state, action) => {
        const postUpdateIndex = state.posts.findIndex(post => post.id === action.payload.id);
        state.posts.splice(postUpdateIndex, 1, action.payload);
      });
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;

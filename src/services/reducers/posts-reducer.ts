import {PostResource} from "../../api/resources/post-resource";
import {createSlice} from "@reduxjs/toolkit";
import {getPostsThunk} from "../thunks/get-post-thunk";
import {getPostsNextPage} from "../thunks/get-posts-next-page";

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
  isHaveNextPage: false
}

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
        state.posts.push(...action.payload.posts)
        state.isHaveNextPage = state.currentPage < state.pagesCount;
      })
  }
})

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;

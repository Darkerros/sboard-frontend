import {createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts} from "../../api";

export const getPostsThunk = createAsyncThunk(
  'getPostsThunk',
  (query?: string) => getPosts(query)
)

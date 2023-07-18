import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostResource} from "../../api/resources/post-resource";
import {updatePostThunk} from "../thunks/update-post-thunk";

interface PostModalReducerState {
  /*
   * Флаг показывающий открытость модалки
   */
  isModalOpen: boolean;
  /*
   * Пост для редактирования
   */
  post: PostResource | null;
  /*
   * Обьект с полями и их ошибками валидации
   */
  validationErrors: Record<string, string>;
  /*
   * Ошибка возникшая при авторизации
   */
  error: string | null;
}

const updatePostModalReducerState: PostModalReducerState = {
  isModalOpen: false,
  post: null,
  validationErrors: {},
  error: null,
}

const updatePostModalSlice = createSlice({
  name: 'updatePostModalSlice',
  initialState: updatePostModalReducerState,
  reducers: {
    openModal: (state, action:PayloadAction<PostResource>) => {
      state.isModalOpen = true;
      state.post = action.payload;
      state.error = null;
      state.validationErrors = {};
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.post = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(updatePostThunk.fulfilled, (state) => {
        state.validationErrors = {};
        state.error = null;
      })
      .addCase(updatePostThunk.rejected, (state, action: PayloadAction<any>) => {
        state.validationErrors = action.payload?.validationErrors;
        state.error = action.payload?.error;
      })
  }
})

export const updatePostModalReducer = updatePostModalSlice.reducer;
export const updatePostModalActions = updatePostModalSlice.actions;

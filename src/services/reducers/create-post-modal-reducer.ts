import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createPostThunk } from '../thunks/create-post-thunk';

interface PostModalReducerState {
  /*
   * Флаг показывающий открытость модалки
   */
  isModalOpen: boolean;
  /*
   * Обьект с полями и их ошибками валидации
   */
  validationErrors: Record<string, string>;
  /*
   * Ошибка возникшая при авторизации
   */
  error: string | null;
}

const postModalReducerState: PostModalReducerState = {
  isModalOpen: false,
  validationErrors: {},
  error: null,
};

const createPostModalSlice = createSlice({
  name: 'postModalSlice',
  initialState: postModalReducerState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createPostThunk.fulfilled, (state) => {
        state.validationErrors = {};
        state.error = null;
      })
      .addCase(createPostThunk.rejected, (state, action: PayloadAction<any>) => {
        state.validationErrors = action.payload?.validationErrors;
        state.error = action.payload?.error;
      });
  },
});

export const createPostModalReducer = createPostModalSlice.reducer;
export const createPostModalActions = createPostModalSlice.actions;

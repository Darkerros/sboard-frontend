import { combineReducers } from '@reduxjs/toolkit';

import { registerFormReducer } from './register-form-reducer';
import { loginFormReducer } from './login-form-reducer';
import { userReducer } from './user-reducer';
import { postsReducer } from './posts-reducer';
import { createPostModalReducer } from './create-post-modal-reducer';
import { updatePostModalReducer } from './update-post-modal-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  loginForm: loginFormReducer,
  registerForm: registerFormReducer,
  updatePostModal: updatePostModalReducer,
  createPostModal: createPostModalReducer,
});

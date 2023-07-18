import {combineReducers} from "@reduxjs/toolkit";
import {registerFormReducer} from "./register-form-reducer";
import {loginFormReducer} from "./login-form-reducer";
import {userReducer} from "./user-reducer";
import {postsReducer} from "./posts-reducer";

export const rootReducer = combineReducers({
  registerForm: registerFormReducer,
  loginForm: loginFormReducer,
  user: userReducer,
  posts: postsReducer
});

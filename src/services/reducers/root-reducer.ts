import {combineReducers} from "@reduxjs/toolkit";
import {registerFormReducer} from "./register-form-reducer";
import {loginFormReducer} from "./login-form-reducer";

export const rootReducer = combineReducers({
  registerForm: registerFormReducer,
  loginForm: loginFormReducer,
});

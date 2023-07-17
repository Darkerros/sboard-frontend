import {combineReducers} from "@reduxjs/toolkit";
import {registerFormReducer} from "./register-form-reducer";

export const rootReducer = combineReducers({
  registerForm: registerFormReducer,
});

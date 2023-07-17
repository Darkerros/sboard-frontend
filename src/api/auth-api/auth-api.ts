import createApiReguest from "../create-api-reguest";
import {API_REQUEST_METHOD} from "../types/api-reguest-method";
import {RegisterUserResponse} from "./responses/register-user-response";
import {LoginUserResponse} from "./responses/login-user-response";
import {UpdateTokenResponse} from "./responses/update-token-response";

export interface IRegisterUserParams {
  /*
   * Никнейм пользователя при регистрации
   */
  nickname?: string;
  /*
   * Почта пользователя при регистрации
   */
  email: string;
  /*
   * Пароль пользователя при регистрации
   */
  password: string;
}

export interface ILoginUserParams {
  /*
   * Почта пользователя для авторизации
   */
  email: string;
  /*
   * Пароль пользователя для авторизации
   */
  password: string;
}

export const registerUser = async ({nickname, email, password}: IRegisterUserParams): Promise<RegisterUserResponse> => {
  return await createApiReguest('/auth/register', API_REQUEST_METHOD.POST,
    {data: {nickname, email, password}})
}

export const loginUser = async ({email, password}: ILoginUserParams): Promise<LoginUserResponse> => {
  return await createApiReguest('/auth/login', API_REQUEST_METHOD.POST,
    {data: {email, password}})
}

export const updateRefreshToken = async (refreshToken: string): Promise<UpdateTokenResponse> => {
  return await createApiReguest('/auth/refresh', API_REQUEST_METHOD.POST,
    {data: {refreshToken}})
}

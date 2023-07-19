import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../consts/token-keys';

export const getAccessToken = (): string | null => localStorage.getItem(ACCESS_TOKEN_KEY);
export const setAccessToken = (value: string | null) => {
  if (value) {
    localStorage.setItem(ACCESS_TOKEN_KEY, value);
    return;
  }
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
export const setRefreshToken = (value: string | null) => {
  if (value) {
    localStorage.setItem(REFRESH_TOKEN_KEY, value);
    return;
  }
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
export const getRefreshToken = (): string | null => localStorage.getItem(REFRESH_TOKEN_KEY);

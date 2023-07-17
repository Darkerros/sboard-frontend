import axios, {AxiosRequestConfig, InternalAxiosRequestConfig} from 'axios';
import {getAccessToken} from "../utils/token-storage";

const BASE_API_URL = 'http://localhost:5000'

const apiInstance = axios.create({
  baseURL: BASE_API_URL,
})

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = getAccessToken()
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
}

apiInstance.interceptors.request.use(authRequestInterceptor)

export default apiInstance;

import axios from 'axios';

const BASE_API_URL = 'http://localhost:5000'

const apiInstance = axios.create({
  baseURL: BASE_API_URL,
})

export default apiInstance;

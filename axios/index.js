import axios from 'react-native-axios';
import {BASE_URL} from './config'

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.interceptors.request.use(config => {
  // !!!have to add HEADERS TOKEN!!!
  return config;
}, error => Promise.reject(error));

axiosInstance.interceptors.response.use(response => {
  return response;
}, error => Promise.reject(error));

export default axiosInstance;


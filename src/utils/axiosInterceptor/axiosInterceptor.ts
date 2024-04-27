import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { BASE_URL } from '../../config/config';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  return req;
});

export default axiosInstance;

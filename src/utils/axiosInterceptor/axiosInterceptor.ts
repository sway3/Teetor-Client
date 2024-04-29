import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  req.withCredentials = true;
  req.headers["Access-Control-Allow-Origin"] = "*";
  return req;
});

export default axiosInstance;

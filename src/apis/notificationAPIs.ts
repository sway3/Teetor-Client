import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';

export const getNotifications = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(`user/notifications`);
  return response;
};

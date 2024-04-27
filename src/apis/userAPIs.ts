import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';

export const getUser = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(`user`);
  return response;
};

export const getMessageList = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(`user/messages/`);
  return response;
};

export const userLogout = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(`logout`);
  return response;
};

export const getChats = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(`chats`);
  return response;
};

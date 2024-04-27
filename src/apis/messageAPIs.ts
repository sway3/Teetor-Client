import { AxiosResponse } from 'axios';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';

interface MessageInfo {
  content: string;
  chatId: string;
}

export const sendMessageRequest = async (
  messageInfo: MessageInfo
): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(`/messages`, messageInfo);
  return response;
};

export const loadMessageRequest = async (
  chatId: string
): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(`/messages/${chatId}`);
  return response;
};

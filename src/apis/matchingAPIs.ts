import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';

export const getDashInfo = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(`/dashboard`);
  return response;
};

export const getMentors = async (
  needHelpWith: string[],
  description: string
): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(`/user/mentors`, {
    needHelpWith: needHelpWith,
    description: description,
  });
  return response;
};

export const sendMentoringRequest = async (
  mentorId: string,
  menteeInfo: any
): Promise<AxiosResponse> => {
  const response = await axiosInstance.post('/mentoring-request', {
    mentorId: mentorId,
    menteeInfo: menteeInfo,
  });
  return response;
};

export const getMentoringRequest = async (
  id: string
): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(`mentoring-request/${id}`);
  return response;
};

export const setMentoringRequestStatus = async (
  id: string,
  status: string,
  title?: string
): Promise<AxiosResponse> => {
  const response = await axiosInstance.patch(`mentoring-request/${id}`, {
    status: status,
    title: title,
  });
  return response;
};

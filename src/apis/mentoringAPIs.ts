import axiosInstance from '../utils/axiosInterceptor/axiosInterceptor';
import { AxiosResponse } from 'axios';

export const addNewEventReq = async (newEvent: any): Promise<AxiosResponse> => {
  const response = await axiosInstance.post(`/calendar`, newEvent);
  return response;
};

export const getEventReq = async (
  sessionId: string
): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(`/calendar/${sessionId}`);
  return response;
};

export const deleteEventReq = async (
  eventInfo: any
): Promise<AxiosResponse> => {
  const response = await axiosInstance.patch(
    `calendar/${eventInfo.sessionId}/event/${eventInfo.eventId}`
  );
  return response;
};

export const editEventReq = async (eventInfo: any): Promise<AxiosResponse> => {
  const response = await axiosInstance.patch(
    `calendar/${eventInfo.sessionId}/new-event/${eventInfo.eventId}`,
    { eventInfo }
  );
  return response;
};

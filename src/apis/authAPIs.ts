import { AxiosResponse } from "axios";
import axiosInstance from "../utils/axiosInterceptor/axiosInterceptor";

//check
export const checkUserAuth = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.post("/auth");
  return response;
};

export const refreshAccessToken = async (): Promise<AxiosResponse> => {
  const response = await axiosInstance.post("/refresh-token");
  return response;
};

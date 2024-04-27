import React, { useEffect } from 'react';

import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const LoginLoadingPage: React.FC = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code')!;

  const userInfoReq = async (code: string): Promise<AxiosResponse> => {
    const response = await axiosInstance.post('/google-oauth', {
      code: code,
    });
    return response;
  };

  const { data, isSuccess, isPending, isError, error } =
    useQuery<AxiosResponse>({
      queryKey: ['google-oauth', code],
      queryFn: () => userInfoReq(code),
      retry: false,
      enabled: !!code,
    });

  useEffect(() => {
    if (data) {
      const status = data.data.status;
      console.log('hi');
      if (status === 'auth_successful') {
        navigate('/');
      } else {
        navigate('/signup', { state: data.data.userInfo });
      }
    }
  }, [isSuccess, data]);

  return <h1>Loading..</h1>;
};

export default LoginLoadingPage;

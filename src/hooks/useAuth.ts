import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { checkUserAuth, refreshAccessToken } from '../apis/authAPIs';
import { useNavigate } from 'react-router-dom';
import useRefresh from './useRefresh';

const useAuth = () => {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);
  const navigate = useNavigate();

  const { data, isSuccess, isPending, error, isError } = useQuery({
    queryKey: ['auth'],
    queryFn: () => checkUserAuth(),
    retry: false,
  });

  const { isRefresh, setIsRefresh } = useRefresh();

  useEffect(() => {
    const auth = async () => {
      if (isSuccess) {
        localStorage.setItem('id', data.data.userId);
        setIsAuthed(true);
      } else if (isError) {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 401) {
          const authHeader =
            axiosError.response.headers.get('Www-authenticate');
          console.log(authHeader);

          if (authHeader.includes('invalid_token')) {
            try {
              setIsRefresh(true);
            } catch (refreshError) {
              console.log(refreshError);
            }
          }
        }
      }
    };

    auth();
  }, [data, error]);

  return { isAuthed, isPending };
};

export default useAuth;

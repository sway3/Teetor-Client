import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { checkUserAuth } from '../apis/authAPIs';
import useRefresh from './useRefresh';

const useAuth = () => {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);

  const { data, isSuccess, isPending, error, isError } = useQuery({
    queryKey: ['auth'],
    queryFn: () => checkUserAuth(),
    retry: false,
  });

  const { setIsRefresh } = useRefresh();

  useEffect(() => {
    const auth = async () => {
      if (isSuccess) {
        localStorage.setItem('id', data.data.userId);
        setIsAuthed(true);
      } else if (isError && error) {
        const axiosError = error as AxiosError;

        if (axiosError.response && axiosError.response?.headers) {
          const authHeader =
            axiosError.response?.headers['www-authenticate']
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

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { refreshAccessToken } from '../apis/authAPIs';

const useRefresh = () => {
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isSuccess, isError, isPending } = useQuery({
    queryKey: ['refresh'],
    queryFn: () => refreshAccessToken(),
    enabled: !!isRefresh,
    retry: false,
  });

  useEffect(() => {
    const refresh = () => {
      if (isRefresh) {
        if (isSuccess) {
          queryClient.invalidateQueries({ queryKey: ['auth'] });
        }

        if (isError) {
          navigate('/');
        }

        setIsRefresh(false);
      }
    };

    refresh();
  }, [isSuccess, isError]);

  return { isRefresh, setIsRefresh };
};

export default useRefresh;

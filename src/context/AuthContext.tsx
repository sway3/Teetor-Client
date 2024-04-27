import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { checkUserAuth } from '../apis/authAPIs';
import { useQuery } from '@tanstack/react-query';
import useRefresh from '../hooks/useRefresh';
import { AxiosError } from 'axios';

type AuthContextProviderProps = {
  children: ReactNode;
};

interface AuthContextType {
  isAuthed: boolean;
  setIsAuthed: React.Dispatch<React.SetStateAction<boolean>>;
  isPending: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthed: false,
  setIsAuthed: () => {},
  isPending: false,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);
  const { data, isSuccess, isPending, error, isError, refetch } = useQuery({
    queryKey: ['auth'],
    queryFn: () => checkUserAuth(),
    retry: false,
  });

  const { isRefresh, setIsRefresh } = useRefresh();

  useEffect(() => {
    const auth = async () => {
      if (isSuccess) {
        setIsAuthed(true);
      } else if (isError) {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 401) {
          const authHeader =
            axiosError.response.headers.get('Www-authenticate');
          console.log(authHeader);

          try {
            setIsRefresh(true);
          } catch (refreshError) {
            console.log(refreshError);
          }
        }
      }
    };

    auth();
  }, [data, isPending, isSuccess, error]);

  const value = useMemo(
    () => ({ isAuthed, isPending, setIsAuthed }),
    [isAuthed, isPending, setIsAuthed]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

import React, { useEffect, useState } from 'react';
import { GoogleLoginButton } from './style';

import DashboardPage from '../DasboardPage/DashboardPage';
import useAuth from '../../hooks/useAuth';
import { SocketContextProvider } from '../../context/SocketContext';
import { AuthContextProvider, useAuthContext } from '../../context/AuthContext';

const LandingPage: React.FC = () => {
  const login = async () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
    const scope =
      'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/userinfo.email openid';
    const responseType = 'code';
    const state = import.meta.env.VITE_GOOGLE_STATE;

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&state=${state}&access_type=offline&prompt=consent`;

    window.location.href = googleAuthUrl;
  };

  const { isAuthed } = useAuth();

  return (
    <>
      {isAuthed ? (
        <AuthContextProvider>
          <SocketContextProvider>
            <DashboardPage />
          </SocketContextProvider>
        </AuthContextProvider>
      ) : (
        <>
          <h1>Welcome to Teetor!</h1>
          <GoogleLoginButton onClick={() => login()} />
        </>
      )}
    </>
  );
};

export default LandingPage;

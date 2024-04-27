import React, { useState, useEffect } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from './styles/GlobalStyles';

import DashboardPage from './pages/DasboardPage/DashboardPage';
import MatchingPage from './pages/MatchingPage/MatchingPage';
import MentoringRequestPage from './pages/MentoringRequest/MentoringRequestPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginLoadingPage from './pages/LoginLoadingPage/LoginLoadingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MatchResultPage from './pages/MatchResultPage/MatchResultPage';
import MatchResultInfoPage from './pages/MatchResultInfoPage/MatchResultInfoPage';
import { SocketContextProvider } from './context/SocketContext';
import useAuth from './hooks/useAuth';
import { AuthContextProvider, useAuthContext } from './context/AuthContext';

interface ServerResponse {
  message: string;
}

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/google/callback'
          element={<LoginLoadingPage />}
        />
        <Route
          path='/match'
          element={<MatchingPage />}
        />
        <Route
          path='/mentoring-request/:id'
          element={<MentoringRequestPage />}
        />
        <Route
          path='/profile'
          element={<ProfilePage />}
        />

        <Route
          path='/messages'
          element={<MessagesPage />}
        />
        <Route
          path='/edit'
          element={<EditProfilePage />}
        />
        <Route
          path='/signup'
          element={<SignUpPage />}
        />
        <Route
          path='/match-result'
          element={<MatchResultPage />}
        />
        <Route
          path='/match-result/:id'
          element={<MatchResultInfoPage />}
        />
      </Routes>
    </>
  );
};

export default App;

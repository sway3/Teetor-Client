import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

import Messages from '../../components/Messages/Messages';

import { Container, Title } from './style';
import useAuth from '../../hooks/useAuth';
import { AuthContextProvider } from '../../context/AuthContext';
import { SocketContextProvider } from '../../context/SocketContext';

const MessagesPage: React.FC = () => {
  const isAuthed = useAuth();

  return (
    <>
      <AuthContextProvider>
        <SocketContextProvider>
          <NavBar />
          <Container>
            <Messages />
          </Container>
        </SocketContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default MessagesPage;

import React from "react";
import NavBar from "../../components/NavBar/NavBar";

import Messages from "../../components/Messages/Messages";

import { Container } from "./style";
import { AuthContextProvider } from "../../context/AuthContext";
import { SocketContextProvider } from "../../context/SocketContext";

//test
const MessagesPage: React.FC = () => {
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

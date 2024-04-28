import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../apis/userAPIs";
import UserInfoForm from "../../components/common/UserInfoForm/UserInfoForm";
import useAuth from "../../hooks/useAuth";
import { AuthContextProvider } from "../../context/AuthContext";
import { SocketContextProvider } from "../../context/SocketContext";
import {
  GoogleLoginButton,
  LandingPageWrapper,
  Welcome,
} from "../LandingPage/style";
import LoginPage from "../../components/common/Login/LoginPage";

const EditProfilePage: React.FC = () => {
  const { isAuthed } = useAuth();

  const { data, isPending, error } = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: () => getUser(),
  });

  let content: React.ReactNode = null;

  if (isPending) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Error: {error.message}</div>;
  }

  if (data) {
    const userInfo = data?.data;
    content = <UserInfoForm userInfo={userInfo} mode="edit" />;
  }

  return (
    <>
      {isAuthed ? (
        <AuthContextProvider>
          <SocketContextProvider>
            <NavBar />
            {content}
          </SocketContextProvider>
        </AuthContextProvider>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default EditProfilePage;

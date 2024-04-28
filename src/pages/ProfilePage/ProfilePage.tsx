import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getUser, userLogout } from "../../apis/userAPIs";

import NavBar from "../../components/NavBar/NavBar";
import {
  ProfilePageWrapper,
  ProfilePageContent,
  PersonalInfoWrapper,
  AvailableDayContentWrapper,
} from "./style";

import AvailableDay from "../../components/common/AvailableDay/AvailableDay";
import UserInfo from "../../components/common/UserInfo/UserInfo";
import RoleInfo from "../../components/common/RoleInfo/RoleInfo";
import useAuth from "../../hooks/useAuth";
import { EditButton } from "../../components/common/UserInfo/style";
import { AuthContextProvider } from "../../context/AuthContext";
import { SocketContextProvider } from "../../context/SocketContext";

const ProfilePage: React.FC = () => {
  const { isAuthed } = useAuth();

  const { data, isPending, error } = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: getUser,
    enabled: !!isAuthed,
  });

  const logoutHandler = async () => {
    const response = await userLogout();
    if (response.status === 200) {
      window.location.reload();
    }
  };

  let content: React.ReactNode = null;

  if (isPending) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Error: {error.message}</div>;
  }

  if (data) {
    const userInfo = {
      userName: data?.data.userName,
      fullName: `${data?.data.firstName} ${data?.data.lastName}`,
      email: data?.data.email,
      role: data?.data.role,
    };

    const availableDays = data?.data.availableDays;

    let roleInfo: any = null;

    data?.data.role.forEach((role: any, _: number) => {
      if (role !== "mentee") {
        roleInfo = {
          profession: data?.data.mentorProfession,
          canHelpWith: data?.data.mentorCanHelpWith,
          description: data?.data.mentorDescription,
        };
      }
    });

    content = (
      <ProfilePageContent>
        <PersonalInfoWrapper>
          <UserInfo user={userInfo} />
          <EditButton to="/edit">Edit Profile</EditButton>
          <button onClick={logoutHandler}>logout</button>
          <AvailableDayContentWrapper>
            <AvailableDay availableDays={availableDays} />
          </AvailableDayContentWrapper>
        </PersonalInfoWrapper>
        {roleInfo && <RoleInfo roleInfo={roleInfo} />}
      </ProfilePageContent>
    );
  }

  return (
    <AuthContextProvider>
      <NavBar />
      <ProfilePageWrapper>{content}</ProfilePageWrapper>
    </AuthContextProvider>
  );
};

export default ProfilePage;

import React, { useEffect } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser, userLogout } from '../../apis/userAPIs';

import NavBar from '../../components/NavBar/NavBar';
import {
  ProfilePageWrapper,
  ProfilePageContent,
  PersonalInfoWrapper,
  SNSInfo,
  AvailableDayContentWrapper,
  SNSInfoWrapper,
} from './style';

import AvailableDay from '../../components/common/AvailableDay/AvailableDay';
import UserInfo from '../../components/common/UserInfo/UserInfo';
import RoleInfo from '../../components/common/RoleInfo/RoleInfo';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProfilePage: React.FC = () => {
  const { isAuthed, isPending: pending } = useAuth();

  const { data, isPending, error } = useQuery({
    queryKey: ['getUserInfo'],
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

    data?.data.role.forEach((role: any, i: number) => {
      if (role !== 'mentee') {
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
          <button onClick={logoutHandler}>logout</button>
          <SNSInfoWrapper>
            <SNSInfo />
            <SNSInfo />
            <SNSInfo />
          </SNSInfoWrapper>
          <AvailableDayContentWrapper>
            <AvailableDay availableDays={availableDays} />
          </AvailableDayContentWrapper>
        </PersonalInfoWrapper>
        {roleInfo && <RoleInfo roleInfo={roleInfo} />}
      </ProfilePageContent>
    );
  }

  return (
    <>
      {isAuthed && (
        <>
          <NavBar />
          <ProfilePageWrapper>{content}</ProfilePageWrapper>
        </>
      )}
    </>
  );
};

export default ProfilePage;

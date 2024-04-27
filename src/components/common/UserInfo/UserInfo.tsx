import React from 'react';

import {
  UserInfoWrapper,
  ProfileImg,
  FullName,
  UserName,
  Email,
  Role,
  EditButton,
  Roles,
} from './style';

interface UserInfoProps {
  user: {
    userName: string;
    fullName: string;
    email: string;
    role: string[];
  };
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <UserInfoWrapper>
      <ProfileImg />
      <FullName>{user.fullName}</FullName>
      <Roles>
        {user.role.length === 1 ? (
          <Role>{user.role}</Role>
        ) : (
          <Role>Mentor / Mentee</Role>
        )}
      </Roles>
      <UserName>@{user.userName}</UserName>
      <Email>{user.email}</Email>
      <EditButton to='/edit'>Edit Profile</EditButton>
    </UserInfoWrapper>
  );
};

export default UserInfo;

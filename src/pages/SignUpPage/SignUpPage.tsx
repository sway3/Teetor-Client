import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import UserInfoForm from '../../components/common/UserInfoForm/UserInfoForm';

const SignUpPage: React.FC = () => {
  const location = useLocation();

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    birthday: '',
    email: '',
    oAuthIdentifier: '',
    role: [],
    description: '',
    profileImg: '',
    qualification: [],
    links: {},
    connections: [],
    mentoringArchive: [],
    availableDays: [],
  });

  useEffect(() => {
    setUserInfo({ ...userInfo, ...location.state });
  }, []);

  console.log(userInfo);

  return (
    <>
      <UserInfoForm
        userInfo={userInfo}
        mode='signup'
      />
    </>
  );
};

export default SignUpPage;

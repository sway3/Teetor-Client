import React from 'react';

import {
  AvailableDayContentWrapper,
  PersonalInfoWrapper,
  ProfilePageContent,
  ProfilePageWrapper,
  SNSInfo,
  SNSInfoWrapper,
} from '../ProfilePage/style';
import UserInfo from '../../components/common/UserInfo/UserInfo';
import AvailableDay from '../../components/common/AvailableDay/AvailableDay';
import RoleInfo from '../../components/common/RoleInfo/RoleInfo';

import NavBar from '../../components/NavBar/NavBar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { sendMentoringRequest } from '../../apis/matchingAPIs';

const MatchResultInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mentor = location.state.mentor;
  const menteeInfo = location.state.menteeInfo;

  const userInfo = {
    userName: mentor.userName,
    fullName: `${mentor.firstName} ${mentor.lastName}`,
    email: mentor.email,
    role: mentor.role,
  };

  const availableDays = mentor.availableDays;

  let roleInfo: any = null;

  if (userInfo.role !== 'mentee') {
    roleInfo = {
      profession: mentor.mentorProfession,
      canHelpWith: mentor.mentorCanHelpWith,
      description: mentor.mentorDescription,
    };
  }

  const mentoringRequestHandler = async () => {
    const response = await sendMentoringRequest(mentor._id, menteeInfo);
    alert('mentoring request sent!');
    navigate('/');
  };

  return (
    <>
      <NavBar />
      <ProfilePageWrapper>
        <ProfilePageContent>
          <PersonalInfoWrapper>
            <UserInfo user={userInfo} />
            <SNSInfoWrapper>
              <SNSInfo />
              <SNSInfo />
              <SNSInfo />
            </SNSInfoWrapper>
            <AvailableDayContentWrapper>
              <AvailableDay availableDays={availableDays} />
            </AvailableDayContentWrapper>
          </PersonalInfoWrapper>
          {mentor.role !== 'mentee' && <RoleInfo roleInfo={roleInfo} />}
          <button onClick={mentoringRequestHandler}>Request mentoring</button>
        </ProfilePageContent>
      </ProfilePageWrapper>
    </>
  );
};

export default MatchResultInfoPage;

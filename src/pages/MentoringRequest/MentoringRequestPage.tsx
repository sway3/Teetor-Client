import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  getMentoringRequest,
  setMentoringRequestStatus,
} from '../../apis/matchingAPIs';

import NavBar from '../../components/NavBar/NavBar';
import {
  Button,
  ButtonWrapper,
  Description,
  Input,
  Instruction,
  NeedHelpWrapper,
  RequestContentWrapper,
  RequestInfoWrapper,
  RequestTitle,
  RequestWrapper,
  Skills,
} from './style';
import {
  AvailableDayContentWrapper,
  PersonalInfoWrapper,
  ProfilePageContent,
  SNSInfo,
  SNSInfoWrapper,
} from '../ProfilePage/style';
import UserInfo from '../../components/common/UserInfo/UserInfo';
import AvailableDay from '../../components/common/AvailableDay/AvailableDay';
import { Card } from '../../components/common/NeedHelpWith/style';

const MentoringRequestPage: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [title, setTitle] = useState('');
  const { id: notificationId } = useParams() as any;

  const { data, isPending, error } = useQuery({
    queryKey: ['getMentoringRequest', notificationId],
    queryFn: () => getMentoringRequest(notificationId),
  });

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const navigate = useNavigate();

  const acceptRequestHandler = () => {
    setIsAccepted(true);
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setMentoringRequestStatus(notificationId, 'accepted', title);
    alert('New mentoring session created! Start off by messaging your mentor.');
    navigate('/');
  };

  const declineRequestHandler = () => {
    setMentoringRequestStatus(notificationId, 'declined');
    alert('Mentoring request is declined.');
    navigate('/dashboard');
  };

  let content: React.ReactNode = null;

  if (isPending) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Error: {error.message}</div>;
  }

  if (data) {
    const status = data.data.notification.status;

    if (status === 'pending') {
      if (isAccepted) {
        content = (
          <>
            <Instruction>
              Please enter the title of this new mentoring session.
            </Instruction>
            <form onSubmit={formSubmitHandler}>
              <Input
                type='text'
                onChange={titleChangeHandler}
                value={title}
              />
              <Button type='submit'>submit</Button>
            </form>
          </>
        );
      } else {
        const availableDays = data?.data.menteeInfo.availableDays;
        const userInfo = {
          userName: data?.data.menteeInfo.userName,
          fullName: `${data?.data.menteeInfo.firstName} ${data?.data.menteeInfo.lastName}`,
          email: data?.data.menteeInfo.email,
          role: data?.data.menteeInfo.role,
        };
        const { menteeNeedHelpWith, menteeDescription } =
          data?.data.notification.content;
        content = (
          <div>
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
            </ProfilePageContent>
            <RequestInfoWrapper>
              <NeedHelpWrapper>
                <h3>I need help with...</h3>
                <Skills>
                  {menteeNeedHelpWith.map((skill: string, i: number) => {
                    return <Card>{skill}</Card>;
                  })}
                </Skills>
              </NeedHelpWrapper>
              <div>
                <h3>Description</h3>
                <Description>
                  {menteeDescription
                    ? menteeDescription
                    : 'The mentee did not write any description about the request.'}
                </Description>
              </div>
            </RequestInfoWrapper>
            <ButtonWrapper>
              <Button onClick={acceptRequestHandler}>accept</Button>
              <Button onClick={declineRequestHandler}>decline</Button>
            </ButtonWrapper>
          </div>
        );
      }
    }
  }

  return (
    <>
      <NavBar />
      <RequestWrapper>
        <RequestTitle>Mentoring Request</RequestTitle>
        <RequestContentWrapper>{content}</RequestContentWrapper>
      </RequestWrapper>
    </>
  );
};

export default MentoringRequestPage;

import React, { ReactNode, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import dayjs, { Dayjs } from 'dayjs';

import NavBar from '../../components/NavBar/NavBar';
import {
  DashboardWrapper,
  DashboardTitle,
  DashboardContent,
  DashboardBrowser,
  DashboardMain,
  DashboardMainFirst,
  DashboardMainSecond,
  DashboardGoal,
  DashboardCalendar,
  DashboardEtc,
  MentoringThreadCard,
  MentoringThreadWrapper,
  MentoringThreadTitle,
} from './style';

import { useQuery } from '@tanstack/react-query';
import { getDashInfo } from '../../apis/matchingAPIs';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DateTimePicker from '../../components/Calendar/DatePicker';
import Calendar from '../../components/Calendar/Calendar';
import EventInfo from '../../components/EventInfo/EventInfo';
import { EventInfoWrapper } from '../../components/EventInfo/style';

const DashboardPage: React.FC = () => {
  const isAuthed = useAuth();
  const [activeThread, setActiveThread] = useState<any>(null);
  const [pickedDate, setPickedDate] = useState<Dayjs | null>(dayjs(new Date()));

  const threadClickHandler = (thread: any) => {
    setActiveThread(thread);
  };

  const { data, isPending, error, refetch } = useQuery<AxiosResponse>({
    queryKey: ['user'],
    queryFn: getDashInfo,
    enabled: true,
  });

  useEffect(() => {
    if (data) {
      const mentoringSessions = data?.data.mentoringSessions;
      if (mentoringSessions.length > 0 && !activeThread) {
        setActiveThread(mentoringSessions[0]);
      }
    }
  }, [data, activeThread]);

  let content: ReactNode = null;

  if (isPending) {
    content = <div>Loading...</div>;
  }

  if (error) {
    location.reload();
  }

  if (data) {
    console.log(data);

    if (data.data.mentoringSessions.length === 0) {
      content = (
        <div>
          <p>
            There is no mentoring session to display on the dashboard. Would you
            like to start a new session?
          </p>
          <Link to='/match'>Start a new session</Link>
        </div>
      );
    }

    if (data.data.mentoringSessions.length > 0) {
      content = data.data.mentoringSessions.map((mentoring: any) => {
        const isActive = mentoring._id === activeThread?._id;
        return (
          <MentoringThreadCard
            key={mentoring._id}
            $isActive={isActive}
            onClick={() => threadClickHandler(mentoring)}
          >
            {mentoring.title}
          </MentoringThreadCard>
        );
      });
    }
  }

  return (
    <>
      <NavBar />
      <DashboardWrapper>
        <DashboardTitle>Dashboard</DashboardTitle>
        <DashboardContent>
          <DashboardBrowser>
            <MentoringThreadTitle>Threads</MentoringThreadTitle>
            <MentoringThreadWrapper>{content}</MentoringThreadWrapper>
          </DashboardBrowser>
          <DashboardMain>
            <DashboardMainFirst>
              <DashboardGoal>
                {data && activeThread && (
                  <Calendar
                    pickedDate={pickedDate}
                    setPickedDate={setPickedDate}
                    sessionId={activeThread?._id}
                  />
                )}
              </DashboardGoal>
            </DashboardMainFirst>
            <DashboardMainSecond>
              <EventInfoWrapper>
                {data && activeThread && (
                  <EventInfo
                    pickedDate={pickedDate}
                    setPickedDate={setPickedDate}
                    sessionId={activeThread?._id}
                  />
                )}
              </EventInfoWrapper>
            </DashboardMainSecond>
          </DashboardMain>
        </DashboardContent>
      </DashboardWrapper>
    </>
  );
};

export default DashboardPage;

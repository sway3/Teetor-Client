import React, { useState } from 'react';

// react-query
import { useQuery } from '@tanstack/react-query';

// apis
import { getMentors, sendMentoringRequest } from '../../apis/matchingAPIs';

// components
import NavBar from '../../components/NavBar/NavBar';
import MentorCard from '../../components/UI/MentorCard/MentorCard';
import { MatchingPageWrapper, GridWrapper } from './style';
import NeedHelpWith from '../../components/common/NeedHelpWith/NeedHelpWith';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from '../../context/AuthContext';
import { SocketContextProvider } from '../../context/SocketContext';

const MatchingPage: React.FC = () => {
  const navigate = useNavigate();
  const [needHelpWith, setNeedHelpWith] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');

  const searchNeedHelpHandler = (e: React.MouseEvent<HTMLElement>) => {
    const targetNeedHelp = e.currentTarget.innerHTML;

    setNeedHelpWith((prev) => {
      const prevHelp = prev;
      const newHelp = prevHelp.includes(targetNeedHelp)
        ? prevHelp
        : [...prevHelp, targetNeedHelp];

      return newHelp;
    });
  };

  const descriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.currentTarget.value);
  };

  const onFindMentors = () => {
    refetch();
  };

  const { data, isPending, error, refetch } = useQuery({
    queryKey: ['getMentors', needHelpWith, description],
    queryFn: () => getMentors(needHelpWith, description),
    enabled: false,
  });

  let content: React.ReactNode = null;

  if (isPending) {
    content = (
      <NeedHelpWith
        needHelp={needHelpWith}
        onResultChange={searchNeedHelpHandler}
        onFindMentors={onFindMentors}
        description={description}
        onDescriptionChange={descriptionChangeHandler}
      />
    );
  }

  if (error) {
    content = <div>Error: {error.message}</div>;
  }

  if (data) {
    const mentors = data.data;
    navigate('/match-result', {
      state: {
        mentors: mentors,
        menteeInfo: { description: description, needHelpWith: needHelpWith },
      },
    });
  }

  return (
    <>
      <NavBar />
      <MatchingPageWrapper>{content}</MatchingPageWrapper>
    </>
  );
};

export default MatchingPage;

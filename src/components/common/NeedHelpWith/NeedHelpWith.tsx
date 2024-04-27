import React, { useState } from 'react';
import {
  Card,
  CardWrapper,
  Container,
  Description,
  FindButton,
  InnerContainer,
  PageExplanation,
  Title,
} from './style';
import SkillSearch from '../SkillSearch/SkillSearch';

interface NeedHelpWithProps {
  needHelp: string[];
  onResultChange: (e: React.MouseEvent<HTMLElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFindMentors: () => void;
  description: string;
}

const NeedHelpWith: React.FC<NeedHelpWithProps> = ({
  needHelp,
  onResultChange,
  onDescriptionChange,
  onFindMentors,
  description,
}) => {
  return (
    <Container>
      <InnerContainer>
        <Title>Find your mentor!</Title>
        <PageExplanation>
          Search and select the disciplines that you need help with, <br />
          then write a specific description about how you expect your mentor to
          assist you!
        </PageExplanation>
        <SkillSearch
          option='canHelpWith'
          onResultChange={onResultChange}
        />
        <CardWrapper>
          {needHelp.map((needHelp, index) => {
            return <Card key={index}>{needHelp}</Card>;
          })}
        </CardWrapper>
        <Description
          value={description}
          onChange={onDescriptionChange}
        />
        <FindButton onClick={onFindMentors}>Find Mentors</FindButton>
      </InnerContainer>
    </Container>
  );
};

export default NeedHelpWith;

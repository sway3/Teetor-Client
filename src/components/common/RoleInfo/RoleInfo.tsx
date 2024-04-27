import React from 'react';

import {
  RoleInfoWrapper,
  RoleInfoTitle,
  RoleInfoContent,
  RoleInfoContentTitle,
  SkillsWrapper,
  Skills,
  Description,
} from '../../../pages/ProfilePage/style';

interface RoleInfoProps {
  roleInfo: {
    profession: string[];
    canHelpWith: string[];
    description: string;
  };
}

const RoleInfo: React.FC<RoleInfoProps> = ({ roleInfo }) => {
  return (
    <RoleInfoWrapper>
      <RoleInfoTitle>Mentor Profile</RoleInfoTitle>
      <SkillsWrapper>
        {roleInfo.profession.map((prof, index) => (
          <Skills key={index}>{prof}</Skills>
        ))}
      </SkillsWrapper>
      <Description>{roleInfo.description}</Description>
    </RoleInfoWrapper>
  );
};

export default RoleInfo;

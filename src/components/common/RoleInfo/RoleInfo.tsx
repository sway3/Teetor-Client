import React from "react";

import {
  RoleInfoWrapper,
  RoleInfoTitle,
  SkillsWrapper,
  Skills,
  Description,
} from "../../../pages/ProfilePage/style";

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
      <RoleInfoTitle>Profession</RoleInfoTitle>
      <SkillsWrapper>
        {roleInfo.profession.map((prof, index) => (
          <Skills key={index}>{prof}</Skills>
        ))}
      </SkillsWrapper>
      <RoleInfoTitle>I can help you with...</RoleInfoTitle>
      <SkillsWrapper>
        {roleInfo.canHelpWith.map((help, index) => (
          <Skills key={index}>{help}</Skills>
        ))}
      </SkillsWrapper>
      <Description>{roleInfo.description}</Description>
    </RoleInfoWrapper>
  );
};

export default RoleInfo;

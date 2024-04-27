import styled from 'styled-components';

export const ProfilePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`;

export const ProfilePageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  width: 50rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PageContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const ProfileImg = styled.div`
  display: block;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  background-color: #000;
`;

export const FullName = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
`;

export const UserName = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: #808080;
`;

export const Email = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: #000;
`;

export const SNSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  gap: 1rem;
`;

export const SNSTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
`;

export const SNSInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SNSInfo = styled.div`
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #000;
`;

export const RoleInfoWrapper = styled.div`
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const RoleInfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
`;

export const RoleInfo = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const RoleInfoContent = styled.div`
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

export const RoleInfoContentTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const Skills = styled.p`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  padding: 0.5rem 1rem;
  border: 1px solid #d2d3db;
  border-radius: 3rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #000;
`;

export const PageContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AvailableDayWrapper = styled.div`
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const AvailableDayTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
`;

export const AvailableDayContentWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const AvailableDayContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

export const AvailableDay = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: #000;
`;

export const AvailableDayBox = styled.div`
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background-color: #000;
`;

export const RatingInfoWrapper = styled.div``;

export const RecentActivityWrapper = styled.div``;

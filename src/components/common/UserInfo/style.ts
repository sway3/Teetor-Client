import styled from 'styled-components';
import { Link } from 'react-router-dom';
import profileImg from '../../../assets/profile/blank_profile.png';

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.div`
  display: block;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-image: url(${profileImg});
  background-repeat: no-repeat;
  background-size: contain;
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
  margin-bottom: 1rem;
`;

export const Roles = styled.div`
  display: flex;
`;

export const Role = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: #000;
`;

export const EditButton = styled(Link)`
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid #dedede;
  border-radius: 1rem;
  background-color: #f2f2f2;
  color: #000;
`;

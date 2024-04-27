import styled from 'styled-components';
import profileImg from '../../assets/profile/blank_profile.png';
import { Link } from 'react-router-dom';

export const ProfileImg = styled.div`
  display: block;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-image: url(${profileImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Username = styled.h3`
  font-size: 1.5em;
  font-weight: 300;
`;

export const SLink = styled(Link)`
  color: #000;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profileImg from '../../assets/profile/blank_profile.png';

export const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #fafafa;
  padding: 0 5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

export const NavBarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FLink = styled(Link)`
  color: #000;

  &:hover {
    color: #9c9c9c;
  }
`;

export const LoginInnerWrapper = styled.div`
  margin-left: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavBarTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

interface NavListProps {
  open: boolean;
}

export const NavList = styled.ul<NavListProps>`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    position: fixed;
    width: 80%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 20;
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #9c9c9c;
  }
`;

export const LoginButton = styled.button`
  display: block;
  font-size: 1rem;
  font-weight: 400;
  background-color: #fff;
  color: #000;
  border: 1px solid #d2d3db;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: #e4e5f1;
  }
`;

export const SignUpButton = styled.button`
  display: block;
  font-size: 1rem;
  font-weight: 400;
  background-color: #000;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ProfileImg = styled.div`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #000;
  background-image: url(${profileImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 30;

  @media (min-width: 769px) {
    display: none;
  }
`;

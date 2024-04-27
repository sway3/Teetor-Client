import React from 'react';

import { Link } from 'react-router-dom';

import {
  NavBarWrapper,
  NavBarInnerWrapper,
  LoginWrapper,
  LoginInnerWrapper,
  NavBarTitle,
  NavList,
  NavItem,
  ButtonWrapper,
  LoginButton,
  SignUpButton,
  ProfileImg,
  FLink,
  MenuButton,
} from './style';

import Notification from '../UI/Notification/Notification';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] =
    React.useState<boolean>(false);

  return (
    <>
      <NavBarWrapper>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? 'X' : '☰'}
        </MenuButton>
        <NavBarInnerWrapper>
          <NavBarTitle>
            <FLink to='/'>teetor</FLink>
          </NavBarTitle>
          <NavList open={isMenuOpen}>
            <NavItem>
              <FLink to='/'>Dashboard</FLink>
            </NavItem>
            <NavItem>
              <FLink to='/messages'>Messages</FLink>
            </NavItem>
            <NavItem onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
              Notification
            </NavItem>
            <NavItem>
              <FLink to='/match'>Find Mentors</FLink>
            </NavItem>
          </NavList>
        </NavBarInnerWrapper>
        <LoginWrapper>
          <LoginInnerWrapper>
            <Link to='/profile'>
              <ProfileImg />
            </Link>
          </LoginInnerWrapper>
        </LoginWrapper>
      </NavBarWrapper>
      <Notification
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </>
  );
};

export default NavBar;

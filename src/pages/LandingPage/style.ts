import styled from 'styled-components';

import loginImage from '../../assets/google/loginbutton.png';

export const GoogleLoginButton = styled.button`
  background-image: url(${loginImage});
  background-size: cover; // Adjust as needed
  background-position: center; // Adjust as needed
  width: 189px; // Your desired width
  height: 40px; // Your desired height
  border: none; // Adjust as needed
  cursor: pointer;
`;

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #155C2F;
`;

export const Welcome = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
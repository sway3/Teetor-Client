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

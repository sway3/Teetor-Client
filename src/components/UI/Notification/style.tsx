import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: -30%;
  width: 30%;
  height: 100vh;
  padding: 2.4rem;
  background-color: #fff;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  transition: left 0.3s ease-in-out;
  overflow-y: auto;

  &.open {
    left: 0;
  }
`;

export const NotificationTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

export const NotificationCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const NotificationImage = styled.div`
  display: block;
  width: 3rem;
  height: 3rem;
  background-color: #000;
  border-radius: 50%;
  margin-right: 1rem;
  flex-shrink: 0;
`;

export const NotificationText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  word-break: break-all;
`;

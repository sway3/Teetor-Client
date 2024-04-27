import styled from 'styled-components';

export const MentorCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30rem;
  border: 1px solid #d2d3db;
  border-radius: 0.5rem;
  background-color: #fff;
  margin-top: 2rem;
  transition: 0.1s ease-in-out;

  &:hover {
    border: 2px solid #229941;
  }

  @media (max-width: 768px) {
    height: 20rem;
  }
`;

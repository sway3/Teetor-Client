import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem;
  height: calc(100vh - 4rem);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

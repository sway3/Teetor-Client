import styled from 'styled-components';

export const MatchingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 70rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;

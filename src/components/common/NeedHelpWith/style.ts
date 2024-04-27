import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  padding: 5rem 5rem;
  border-radius: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PageExplanation = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
`;

export const Card = styled.div`
  display: block;
  width: fit-content;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  padding: 0.5rem 1rem;
  border: 1px solid #d2d3db;
  border-radius: 3rem;
`;

export const Description = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 0.8rem;
  margin-top: 1rem;
  border: 1px solid #c9c9c9;
  border-radius: 1rem;
  resize: none;
`;

export const FindButton = styled.button`
  padding: 1rem;
  color: #000;
  background-color: #c9c9c9;
  border: none;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #14452f;
  }
`;

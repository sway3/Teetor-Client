import styled from 'styled-components';

export const EventInfoWrapper = styled.div`
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const DateTime = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const EventTitle = styled.h3`
  font-size: 1.5rem;
`;

export const Description = styled.p`
  overflow-wrap: break-word;
  font-size: 1rem;
  width: 34rem;
  height: 9rem;
  overflow: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  color: #000;
  background-color: #ebebeb;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #14452f;
    border: none;
  }
`;

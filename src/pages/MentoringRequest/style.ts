import styled from 'styled-components';

export const RequestWrapper = styled.div`
  padding: 2rem 5rem;
`;

export const RequestTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const RequestContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RequestInfoWrapper = styled.div`
  width: 50rem;
  margin: 1rem 0;
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const NeedHelpWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const Description = styled.p`
  word-wrap: break-word;
`;

export const Skills = styled.div`
  display: flex;
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

export const Instruction = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  padding: 1rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
`;

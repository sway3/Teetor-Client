import styled from 'styled-components';

export const CalendarTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
`;

interface EventWrapperProps {
  $isDisplay: boolean;
}

export const NewEventWrapper = styled.div<EventWrapperProps>`
  display: ${(props) => (props.$isDisplay ? 'flex' : 'none')};
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

export const DescriptionInput = styled.textarea`
  resize: none;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

interface ButtonProps {
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.width ? '180px' : '100px')};
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

import styled, { css } from 'styled-components';

type OptionProps = {
  isSelected: boolean;
  onClick: () => void;
};

export const ToggleContainer = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

export const Option = styled.button<OptionProps>`
  flex: 1;
  padding: 1rem;
  border: none;
  background-color: #fff;
  color: #777;
  font-size: 1rem;
  transition: all 0.3s;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #007bff;
      color: white;
      font-weight: 600;
      border: 1px solid #0056b3;
    `}

  &:first-child {
    border-right: 1px solid #ccc;
  }
`;

import styled from 'styled-components';

export const Input = styled.input`
  width: 20rem;
  font-size: 1rem;
  padding: 0.7rem;
  border-radius: 1rem;
  border: 1px solid #c9c9c9;
`;

export const Dropdown = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0, 1);
  width: 20rem;
  max-height: 20rem;
  overflow-y: auto;
  border-radius: 4px;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

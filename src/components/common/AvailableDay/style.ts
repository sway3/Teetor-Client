import styled from 'styled-components';

export const AvailableDayWrapper = styled.div`
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const AvailableDayTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
`;

export const AvailableDayContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const AvailableDayContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Day = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: #000;
`;

interface AvailableDayBoxProps {
  $isavailable: boolean;
}

export const AvailableDayBox = styled.div<AvailableDayBoxProps>`
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background-color: ${(props) => (props.$isavailable ? '#097969' : '#B2BEB5')};

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

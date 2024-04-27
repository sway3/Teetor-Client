import { DateCalendar } from '@mui/x-date-pickers';
import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  padding: 2rem 5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const DashboardTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const DashboardContent = styled.div`
  display: flex;
  gap: 2rem;
  width: 95rem;
  height: 45rem;
  margin-top: 2rem;

  @media (max-width: 1400px) {
    width: 80rem;
  }

  @media (max-width: 1200px) {
    width: 60rem;
  }

  @media (max-width: 1000px) {
    height: 100%;
  }

  @media (max-width: 900px) {
    width: 40rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const DashboardBrowser = styled.div`
  width: 18rem;
  height: 100%;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MentoringThreadTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const MentoringThreadWrapper = styled.div`
  width: 100%;
  height: 10rem;
`;

interface MentoringThreadCardProps {
  $isActive: boolean;
}

export const MentoringThreadCard = styled.div<MentoringThreadCardProps>`
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${(props) => (props.$isActive ? '#14452F' : 'fff')};
  color: ${(props) => (props.$isActive ? '#fff' : '#000')};
`;

export const DashboardMain = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const DashboardMainFirst = styled.div`
  width: 100%;
  height: 100%;
`;

export const DashboardGoal = styled.div`
  display: block;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const DashboardMainSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

export const DashboardCalendar = styled.div`
  display: block;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;

export const DashboardEtc = styled.div`
  display: block;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;

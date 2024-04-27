import React from 'react';

import {
  AvailableDayContentWrapper,
  AvailableDayContent,
  Day,
  AvailableDayBox,
} from './style';

interface AvailableDayProps {
  availableDays: string[];
  isEditable?: boolean;
  onUpdateDays?: (e: React.MouseEvent<HTMLElement>) => void;
}

const AvailableDay: React.FC<AvailableDayProps> = ({
  availableDays,
  isEditable,
  onUpdateDays,
}) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  if (isEditable) {
  }

  return (
    <AvailableDayContentWrapper>
      {days.map((day, index) => {
        return (
          <AvailableDayContent key={index}>
            <Day>{day}</Day>
            <AvailableDayBox
              key={index}
              data-name={day}
              onClick={onUpdateDays}
              $isavailable={availableDays.includes(day)}
            />
          </AvailableDayContent>
        );
      })}
    </AvailableDayContentWrapper>
  );
};

export default AvailableDay;

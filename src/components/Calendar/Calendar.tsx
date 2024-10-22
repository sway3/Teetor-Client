import React, { useState } from "react";
import { DateCalendar, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { Badge } from "@mui/material";
import { Button, CalendarTitle } from "./style";
import DatePicker from "./DatePicker";
import useLoadEvents from "../../hooks/useLoadEvents";

interface CalendarProps {
  sessionId: string;
  pickedDate: Dayjs | null;
  setPickedDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

const Calendar: React.FC<CalendarProps> = ({
  sessionId,
  pickedDate,
  setPickedDate,
}) => {
  const { loadedevents } = useLoadEvents(sessionId);

  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const ServerDay = (
    props: PickersDayProps<Dayjs> & { loadedevents?: number[] }
  ) => {
    const { loadedevents = [], day, outsideCurrentMonth, ...other } = props;

    const formattedEvents = loadedevents.map((e: any, _: number) => {
      return (
        new Date(e.date).getFullYear().toString() +
        new Date(e.date).getMonth().toString() +
        new Date(e.date).getDate().toString()
      );
    });

    const isSelected =
      !props.outsideCurrentMonth &&
      formattedEvents.indexOf(
        props.day.year().toString() +
          props.day.month().toString() +
          props.day.date().toString()
      ) >= 0;

    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={isSelected ? "✅" : undefined}
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  };

  const newSessionHandler = () => {
    setIsDisplay(true);
  };

  return (
    <>
      <CalendarTitle>Session Calendar</CalendarTitle>
      {loadedevents && (
        <DateCalendar
          value={pickedDate}
          onChange={(pickedDate) => setPickedDate(pickedDate)}
          slots={{ day: ServerDay }}
          slotProps={{
            day: {
              loadedevents,
            } as any,
          }}
        />
      )}

      {!isDisplay && (
        <Button onClick={newSessionHandler} width="200px">
          Plan New Session
        </Button>
      )}
      {isDisplay && (
        <>
          <DatePicker
            sessionId={sessionId}
            isDisplay={isDisplay}
            setIsDisplay={setIsDisplay}
          />
        </>
      )}
    </>
  );
};

export default Calendar;

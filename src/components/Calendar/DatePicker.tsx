import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  PickersDay,
  PickersDayProps,
  StaticDateTimePicker,
  StaticDateTimePickerSlots,
} from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { Badge } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useMutation } from '@tanstack/react-query';
import { addNewEventReq } from '../../apis/mentoringAPIs';
import {
  Button,
  ButtonWrapper,
  DescriptionInput,
  Form,
  NewEventWrapper,
  TitleInput,
} from './style';
import useLoadEvents from '../../hooks/useLoadEvents';

interface DateTimePickerProps {
  sessionId: string;
  isDisplay: boolean;
  setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const DatePicker: React.FC<DateTimePickerProps> = ({
  sessionId,
  isDisplay,
  setIsDisplay,
}) => {
  const [pickedDate, setPickedDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [newEventForm, setNewEventForm] = useState<any>({
    title: '',
    description: '',
  });

  const { loadedevents, isPending } = useLoadEvents(sessionId);

  const addEventsMutation = useMutation({
    mutationFn: (newEvent: any) => addNewEventReq(newEvent),
  });

  const ServerDay = (
    props: PickersDayProps<Dayjs> & { loadedevents?: string[] }
  ) => {
    const { loadedevents = [], day, outsideCurrentMonth, ...other } = props;

    const formattedEvents = loadedevents.map((e: any, i: number) => {
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
        overlap='circular'
        badgeContent={isSelected ? '✅' : undefined}
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  };

  const formChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setNewEventForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitNewSessionHandler = (e: FormEvent) => {
    e.preventDefault();

    if (pickedDate) {
      const formattedDate = pickedDate.toDate().toISOString();
      const newEvent = {
        sessionId: sessionId,
        date: formattedDate,
        title: newEventForm.title,
        description: newEventForm.description,
      };
      addEventsMutation.mutate(newEvent);
      alert('new meeting is successfully added.');
      location.reload();
    }
  };

  return (
    <NewEventWrapper $isDisplay={isDisplay}>
      <DateTimePicker
        value={pickedDate}
        onChange={(newDate) => setPickedDate(newDate)}
        slotProps={{
          day: {
            loadedevents,
          } as any,
        }}
      />
      <Form onSubmit={submitNewSessionHandler}>
        <TitleInput
          type='text'
          name='title'
          placeholder='enter title'
          value={newEventForm.title}
          onChange={formChangeHandler}
        />
        <DescriptionInput
          name='description'
          value={newEventForm.description}
          onChange={formChangeHandler}
        />
        <ButtonWrapper>
          <Button onClick={() => setIsDisplay(false)}>cancel</Button>
          <Button onClick={submitNewSessionHandler}>submit</Button>
        </ButtonWrapper>
      </Form>
    </NewEventWrapper>
  );
};

export default DatePicker;

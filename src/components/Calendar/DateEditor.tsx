import React, { ChangeEvent, FormEvent, useState } from 'react';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { Badge } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useMutation } from '@tanstack/react-query';
import { addNewEventReq, editEventReq } from '../../apis/mentoringAPIs';
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
  eventInfo: any;
  isDisplay: boolean;
  setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateEditor: React.FC<DateTimePickerProps> = ({
  sessionId,
  isDisplay,
  eventInfo,
  setIsDisplay,
}) => {
  const [pickedDate, setPickedDate] = useState<Dayjs | null>(
    dayjs(eventInfo.date)
  );

  const [newEventForm, setNewEventForm] = useState<any>(eventInfo);

  const { loadedevents, isPending } = useLoadEvents(sessionId);

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
    console.log(pickedDate);
    const { name, value } = e.currentTarget;
    setNewEventForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editEventMutation = useMutation({
    mutationFn: (eventInfo: any) => editEventReq(eventInfo),
  });

  const submitEditSessionHandler = (e: FormEvent) => {
    e.preventDefault();

    if (pickedDate) {
      const formattedDate = pickedDate.toDate().toISOString();
      const newEvent = {
        sessionId: sessionId,
        eventId: eventInfo._id,
        date: formattedDate,
        title: newEventForm.title,
        description: newEventForm.description,
      };

      editEventMutation.mutate(newEvent);

      alert('Meeting is successfully edited.');
      location.reload();
    }
  };

  return (
    <NewEventWrapper $isDisplay={isDisplay}>
      <DateTimePicker
        value={pickedDate}
        onChange={(newDate) => setPickedDate(newDate)}
        slots={{ day: ServerDay }}
        slotProps={{
          day: {
            loadedevents,
          } as any,
        }}
      />
      <Form onSubmit={submitEditSessionHandler}>
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
          <Button onClick={submitEditSessionHandler}>submit</Button>
        </ButtonWrapper>
      </Form>
    </NewEventWrapper>
  );
};

export default DateEditor;

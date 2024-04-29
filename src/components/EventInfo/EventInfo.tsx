import { Dayjs } from "dayjs";
import React, { useState } from "react";
import useLoadEvents from "../../hooks/useLoadEvents";
import { useMutation } from "@tanstack/react-query";
import { deleteEventReq } from "../../apis/mentoringAPIs";
import {
  Description,
  Title,
  DateTime,
  EventTitle,
  ButtonWrapper,
  Button,
} from "./style";
import DateEditor from "../Calendar/DateEditor";
import moment from "moment";

interface EventInfoProps {
  pickedDate: Dayjs | null;
  sessionId: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ pickedDate, sessionId }) => {
  const { loadedevents, isPending } = useLoadEvents(sessionId);
  const [isEditEvent, setIsEditEvent] = useState<boolean>(false);

  let eventInfo: any;

  loadedevents.forEach((e: any, _: number) => {
    if (
      pickedDate?.toDate().toISOString().slice(0, 10) === e.date.slice(0, 10)
    ) {
      eventInfo = e;
    }
  });

  const removeEventMutation = useMutation({
    mutationFn: (eventInfo: any) => deleteEventReq(eventInfo),
    onSuccess: () => {
      alert("Successfully removed meeting");
      location.reload();
    },
  });

  const removeEventHandler = () => {
    const event = {
      sessionId: sessionId,
      eventId: eventInfo._id,
    };
    removeEventMutation.mutate(event);
  };

  return (
    <>
      <Title>Meeting Information</Title>
      {isPending && <p>loading..</p>}
      {!isPending && eventInfo && (
        <>
          {!isEditEvent ? (
            <>
              <EventTitle>{eventInfo.title}</EventTitle>
              <DateTime>
                {moment(eventInfo?.date).format().slice(0, 10)}{" "}
                {moment(eventInfo.date).format().slice(11, 16)}
              </DateTime>
              <Description>{eventInfo.description}</Description>
              <ButtonWrapper>
                <Button onClick={() => setIsEditEvent(true)}>edit</Button>
                <Button onClick={removeEventHandler}>remove</Button>
              </ButtonWrapper>
            </>
          ) : (
            <>
              <DateEditor
                sessionId={sessionId}
                eventInfo={eventInfo}
                isDisplay={isEditEvent}
                setIsDisplay={setIsEditEvent}
              />
            </>
          )}
        </>
      )}
      {!isPending && !eventInfo && <p>no event</p>}
    </>
  );
};

export default EventInfo;

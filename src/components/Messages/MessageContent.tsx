import React, { useEffect, useRef } from "react";
import { ChatContent, SuggestButton, Suggestion } from "./style";
import useLoadMessages from "../../hooks/useLoadMessages";
import useListenMessages from "../../hooks/useListenMessages";
import Message from "./Message";
import useSendMessage from "../../hooks/useSendMessage";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getSuggestionRequest } from "../../apis/messageAPIs";

interface Chat {
  _id: string;
  participants: string[];
  latestContent: string;
  timestamp: string;
}

interface MessageContentProps {
  chat: Chat;
}

const MessageContent: React.FC<MessageContentProps> = ({ chat }) => {
  const { isAuthed } = useAuth();
  console.log(isAuthed);
  const endOfMessagesRef: any = useRef(null);
  const sendMessageMutation = useSendMessage();
  const { messages, setMessages, isPending } = useLoadMessages(chat._id);
  useListenMessages(messages, setMessages);

  const sendSuggestionHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const messageInfo = {
      content: e.currentTarget.innerHTML,
      chatId: chat._id,
    };

    sendMessageMutation.mutate(messageInfo);
  };

  const {
    data,
    isPending: sugPending,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["getSuggestions"],
    queryFn: () => getSuggestionRequest(chat._id),
    enabled: false,
  });

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView();
  }, [messages, data]);

  return (
    <>
      <ChatContent>
        {isPending && <p>loading...</p>}

        {!isPending &&
          messages &&
          messages.map((message: any, index) => {
            return <Message key={index} message={message} />;
          })}

        {!sugPending &&
          data?.data &&
          data.data.map((sug: string, i: number) => {
            return (
              <Suggestion key={i} onClick={sendSuggestionHandler}>
                {sug}
              </Suggestion>
            );
          })}

        {isFetching && <p>loading suggestions...</p>}
        <div ref={endOfMessagesRef} />
      </ChatContent>
      <SuggestButton onClick={() => refetch()}>Get suggestions</SuggestButton>
    </>
  );
};

export default MessageContent;

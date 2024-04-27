import React, { useState, useEffect, ReactNode } from 'react';
import { io } from 'socket.io-client';

import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';

import {
  Container,
  Title,
  ThreadContainer,
  ThreadNavigator,
  MessagesThread,
  ChatContainer,
  ChatInput,
  ChatContent,
  ChatMessage,
  Chat,
} from './style';

import { getChats, getMessageList } from '../../apis/userAPIs';
import MessageInput from './MessageInput';
import MessageContent from './MessageContent';

interface Chat {
  _id: string;
  participants: string[];
  latestContent: string;
  timestamp: string;
}

const Messages: React.FC = () => {
  const [targetChat, setTargetChat] = useState<Chat>({
    _id: '',
    participants: [],
    latestContent: '',
    timestamp: '',
  });

  const { data, isPending, error } = useQuery<AxiosResponse>({
    queryKey: ['chats'],
    queryFn: () => getChats(),
  });

  useEffect(() => {
    if (data) {
      const chats = data.data;
      if (chats) setTargetChat(chats[0]);
    }
  }, [data]);

  let content: ReactNode = null;

  if (isPending) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Error: {error.message}</div>;
  }

  if (data) {
    const chats = data.data;
    content =
      chats.length !== 0 ? (
        <>
          {chats.map((chat: Chat, index: number) => {
            return (
              <Chat
                key={index}
                onClick={() => setTargetChat(chat)}
                $isActive={targetChat._id === chat._id}
              >
                {chat._id}
              </Chat>
            );
          })}
        </>
      ) : (
        <p>Please create a new mentoring session to chat with someone!</p>
      );
  }

  return (
    <>
      <Container>
        <ThreadContainer>
          <ThreadNavigator>
            <Title>Messages</Title>
            {content}
          </ThreadNavigator>
        </ThreadContainer>
        <ChatContainer>
          {data && targetChat && <MessageContent chat={targetChat} />}
          <MessageInput chat={targetChat} />
        </ChatContainer>
      </Container>
    </>
  );
};

export default Messages;

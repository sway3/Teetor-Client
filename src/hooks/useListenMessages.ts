import React, { useEffect } from 'react';

import { useSocketContext } from '../context/SocketContext';

interface Message {
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
}

type SetMessagesFunction = React.Dispatch<React.SetStateAction<Message[]>>;

const useListenMessages = (
  messages: Message[],
  setMessages: SetMessagesFunction
) => {
  const { socket } = useSocketContext();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      console.log('loading new message');
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off('newMessage');
    };
  }, [socket, messages, setMessages]);
};

export default useListenMessages;

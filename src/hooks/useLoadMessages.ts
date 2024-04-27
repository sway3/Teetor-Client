import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { loadMessageRequest } from '../apis/messageAPIs';

interface Message {
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
}

const useLoadMessages = (chatId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestions, setSuggestions] = useState<any>([]);

  const { data, isPending, isError } = useQuery({
    queryKey: ['loadMessages', chatId],
    queryFn: () => loadMessageRequest(chatId),
  });

  useEffect(() => {
    if (data) {
      setMessages(data.data.messages);

      if (data.data.chatSuggestion) {
        setSuggestions(data.data.chatSuggestion);
      }

      console.log(suggestions);
    }
  }, [data]);

  return { messages, setMessages, suggestions, setSuggestions, isPending };
};

export default useLoadMessages;

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { loadMessageRequest } from "../apis/messageAPIs";
import { useNavigate } from "react-router-dom";

interface Message {
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
}

const useLoadMessages = (chatId: string) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);

  const { data, isPending, isError } = useQuery({
    queryKey: ["loadMessages", chatId],
    queryFn: () => loadMessageRequest(chatId),
  });

  useEffect(() => {
    if (isError) {
      navigate("/");
    }

    if (data) {
      setMessages(data.data.messages);
    }
  }, [data]);

  return { messages, setMessages, isPending };
};

export default useLoadMessages;

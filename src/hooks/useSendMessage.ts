import { useMutation } from '@tanstack/react-query';
import { sendMessageRequest } from '../apis/messageAPIs';

interface MessageInfo {
  content: string;
  chatId: string;
}

const useSendMessage = () => {
  const sendMessageMutation = useMutation({
    mutationFn: (messageInfo: MessageInfo) => sendMessageRequest(messageInfo),
  });

  return sendMessageMutation;
};

export default useSendMessage;

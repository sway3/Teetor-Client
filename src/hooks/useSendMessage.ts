import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { sendMessageRequest } from '../apis/messageAPIs';
import { AxiosResponse } from 'axios';

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

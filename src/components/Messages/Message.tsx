import React from 'react';
import { ChatMessage, MessageBox, MessageWrapper } from './style';

interface MessageProps {
  message: any;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const userId = localStorage.getItem('id');
  const senderId = message.senderId._id;
  const fromMe = userId === senderId;

  return (
    <ChatMessage $fromMe={fromMe}>
      <MessageWrapper $fromMe={fromMe}>
        <p>{message.senderId.firstName}</p>
        <MessageBox $fromMe={fromMe}>{message.content}</MessageBox>
      </MessageWrapper>
    </ChatMessage>
  );
};

export default Message;

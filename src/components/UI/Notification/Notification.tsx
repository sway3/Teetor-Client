import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '../../../apis/notificationAPIs';

import {
  NotificationText,
  NotificationTitle,
  NotificationWrapper,
  NotificationCard,
  NotificationImage,
} from './style';
import useCloseNotification from '../../../hooks/useCloseNotification';
import { Link } from 'react-router-dom';

interface NotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ isOpen, onClose }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useCloseNotification(wrapperRef, onClose);

  const { data, isPending, error } = useQuery({
    queryKey: ['getNotifications'],
    queryFn: () => getNotifications(),
    enabled: isOpen,
  });

  let content: React.ReactNode = null;

  if (isPending) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Error: {error.message}</div>;
  }

  if (data) {
    const notifications = data.data;
    content = notifications.map((notif: any) => {
      return (
        <NotificationCard key={notif._id}>
          <NotificationImage />
          <NotificationText>
            <Link
              to={`/mentoring-request/${notif._id}`}
              style={{ color: 'black' }}
            >
              <strong>{notif.message}</strong>
            </Link>
          </NotificationText>
        </NotificationCard>
      );
    });
  }

  return (
    <NotificationWrapper
      ref={wrapperRef}
      className={isOpen ? 'open' : ''}
    >
      <NotificationTitle>Notifications</NotificationTitle>
      <div>{content}</div>
    </NotificationWrapper>
  );
};

export default Notification;

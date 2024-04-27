import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import useAuth from './useAuth';

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  const { isAuthed } = useAuth();

  useEffect(() => {
    console.log('Effect triggered: isAuthed =', isAuthed);
    if (isAuthed) {
      console.log('hi');
      const newSocket: Socket = io('http://localhost:3001', {
        withCredentials: true,
      });

      setSocket(newSocket);

      newSocket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [isAuthed]);

  return { socket, onlineUsers };
};

export default useSocket;

import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Socket, io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

type ContextType = {
  socket: Socket | null;
  onlineUsers: any[];
};

type SocketContextProviderProps = {
  children: ReactNode;
};

export const SocketContext = createContext<ContextType>({
  socket: null,
  onlineUsers: [],
});

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({
  children,
}: SocketContextProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<any>([]);
  const { isAuthed } = useAuthContext();

  useEffect(() => {
    if (isAuthed) {
      console.log("hi");
      const socket: Socket = io(import.meta.env.VITE_BASE_URL, {
        withCredentials: true,
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [isAuthed]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

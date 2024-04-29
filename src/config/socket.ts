import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_BASE_URL;
const socket = io(SOCKET_URL);

export default socket;

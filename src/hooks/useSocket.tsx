import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = (serverPath: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [online, setOnline] = useState(false);

  const conectarSocket = useCallback(() => {
    const token = localStorage.getItem("token");

    const socketTemp = io(serverPath, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
    });

    // Handle connection errors
    socketTemp.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    // Set up event listeners
    socketTemp.on("connect", () => setOnline(true));
    socketTemp.on("disconnect", () => setOnline(false));

    setSocket(socketTemp);
  }, [serverPath]);

  const desconectarSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected!);
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on("disconnect", () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
    conectarSocket,
    desconectarSocket,
  };
};

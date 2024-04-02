import React, { ReactNode, useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

interface DynamicLayoutProps {
  children: ReactNode;
}

export const SocketContext = createContext<any | null>(null);

export const SocketProvider: React.FC<DynamicLayoutProps> = ({ children }: DynamicLayoutProps) => {
  const { socket, online, conectarSocket} = useSocket(import.meta.env.VITE_API_URL);
  useEffect(() => {
    conectarSocket();
  }, [conectarSocket]);

  //useEffect(() => {
    //desconectarSocket();
  //}, [desconectarSocket]);

  return (
    <SocketContext.Provider value= {{ socket, online }}>
        { children }
    </SocketContext.Provider>
  );
};
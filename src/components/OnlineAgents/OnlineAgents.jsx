import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import API_CONFIG from '../../config/API/api';
import useOnlineAgentsStore from '../../Zunstand/onlineAgentsStore'; 
import { emitEvent, initializeSocket } from '../../Socket/Socket';

const OnlineAgentsListener = () => {
  const socketRef = useRef(null);
  const { apiKey } = API_CONFIG;
  const { setOnlineAgents } = useOnlineAgentsStore(state => ({
    setOnlineAgents: state.setOnlineAgents
  }));

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(apiKey);

      socketRef.current.on('online_agents', (agents) => {
        if (Array.isArray(agents)) {
          setOnlineAgents(agents); 
        }
      });

      socketRef.current.on('connect_error', (error) => {
        console.error('WebSocket connection error:', error);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [apiKey, setOnlineAgents]);

  return null; 
};

export const EmitOnlineAgent = ()=>{
initializeSocket();
useEffect(() => {

  const agentId = localStorage.getItem("agentId");
  if (agentId) {
    emitEvent('agent_connected', agentId);
  }
}, []);

}

export default OnlineAgentsListener;

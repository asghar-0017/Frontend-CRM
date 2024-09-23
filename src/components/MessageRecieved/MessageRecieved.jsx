import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import API_CONFIG from '../../config/API/api'; 
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const MessageListener = ({ onMessageReceived }) => {
  const socketRef = useRef(null);
  const location = useLocation();
  const { apiKey } = API_CONFIG;
  const agentId = localStorage.getItem("agentId");

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(apiKey);

      socketRef.current.on("receive_message", (payload) => {        
        if (payload && payload.message && payload.data.agentId == agentId && payload.data.role == "admin" && !location.pathname.includes("/agent/agentChat")) {
            toast('You have recieved a new message!', { icon: '🔔' });
          if (onMessageReceived) {
            onMessageReceived(payload); 
          }
        }
      });

      socketRef.current.on("connect_error", (error) => {
        console.error("WebSocket connection error:", error);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [apiKey, onMessageReceived, location.pathname]);

  return null; 
};

export default MessageListener;

import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import API_CONFIG from '../../config/API/api';

const CSVScoket = () => {
  const socketRef = useRef(null);
  const { apiKey } = API_CONFIG;

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(apiKey);

      socketRef.current.on('receive_message', (payload) => {
        console.log(payload);
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
  }, [apiKey]);

  return null; 
};


export default CSVScoket;

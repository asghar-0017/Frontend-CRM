import io from 'socket.io-client';
import API_CONFIG from '../config/API/api'; 

const { apiKey } = API_CONFIG;
let socket;

export const initializeSocket = () => {
  if (!socket) {
    socket = io(apiKey, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: Infinity, 
      reconnectionDelay: 1000, 
      reconnectionDelayMax: 5000, 
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    socket.on('error', (error) => {
      console.error('Socket.IO error:', error);
    });
  }
};

export const subscribeToUpdates = (eventName, callback) => {
  if (!socket) {
    console.error('Socket is not initialized. Call initializeSocket() first.');
    return;
  }

  socket.on(eventName, callback);
};

export const unsubscribeFromUpdates = (eventName) => {
  if (!socket) {
    console.error('Socket is not initialized. Call initializeSocket() first.');
    return;
  }

  socket.off(eventName);
};

export const emitEvent = (eventName, data) => {
  if (!socket) {
    console.error('Socket is not initialized. Call initializeSocket() first.');
    return;
  }

  socket.emit(eventName, data);
};

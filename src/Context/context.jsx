import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskEndPoint, setTaskEndPoint] = useState(false); 

  return (
    <TaskContext.Provider value={{ taskEndPoint, setTaskEndPoint }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);

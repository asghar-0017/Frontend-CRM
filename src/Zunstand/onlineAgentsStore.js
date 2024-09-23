import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOnlineAgentsStore = create(
  persist(
    (set) => ({
      onlineAgents: [], 
      setOnlineAgents: (agents) => set({ onlineAgents: agents }), 
    }),
    {
      name: 'onlineAgents', 
    }
  )
);

export default useOnlineAgentsStore;

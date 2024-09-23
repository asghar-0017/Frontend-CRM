import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const agnetInfo = create(
  persist(
    (set, get) => ({
     userData: {},
     updatedUserData: (userData)=> set({userData: userData})
    }),
    {
      name: 'agentInfo', 
    },
  ),
)

export default agnetInfo;
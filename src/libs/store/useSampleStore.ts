import { create } from 'zustand';
import axios from 'axios';

export const useUserStore = create(set => ({
  // State
  data: null,
  // Set State
  setData: (payload: any) => set(() => ({ data: payload })),
  // Fetch
  fetchSample: async () => {
    try {
      await axios.get('url');
    } catch (e: any) {
      throw Error(e.message);
    }
  },
}));

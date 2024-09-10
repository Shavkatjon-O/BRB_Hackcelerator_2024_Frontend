import { create } from 'zustand';
import CoreAPI from '@/lib/coreApi';
import { UserProfileType } from '@/types/authTypes';

interface UserState {
  user: UserProfileType | null;
  isLoaded: boolean;
  error: any;
  fetchUser: () => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoaded: false,
  error: null,

  fetchUser: async () => {
    try {
      const response = await CoreAPI.get("/users/profile/");
      set({ user: response.data, isLoaded: true });
    } catch (error: any) {
      set({ error: error, isLoaded: true });
    }
  }
}));

export default useUserStore;

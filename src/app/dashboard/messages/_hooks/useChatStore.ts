import { create } from "zustand";
import coreApi from "@/lib/coreApi";

interface UserProfileType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  image: string;
}

interface Message {
  id: number;
  created_at: string;
  text: string;
  isLoading?: boolean;
}

interface State {
  input: string;
  messages: Message[];
  selectedUser: UserProfileType | null;
  hasInitialResponse: boolean;
  isLoading: boolean;
  error: string | null;
  users: UserProfileType[];
}

interface Actions {
  setInput: (input: string) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  fetchMessages: (userId: number) => Promise<void>;
  setMessages: (fn: (messages: Message[]) => Message[]) => void;
  setHasInitialResponse: (hasInitialResponse: boolean) => void;
  selectUser: (userId: number) => void;
  fetchUsers: () => Promise<void>;
  setUsers: (users: UserProfileType[]) => void;
}

const useChatStore = create<State & Actions>((set, get) => ({
  input: "",
  messages: [],
  selectedUser: null,
  hasInitialResponse: false,
  isLoading: false,
  error: null,
  users: [],

  setInput: (input) => set({ input }),

  handleInputChange: (e) => set({ input: e.target.value }),

  fetchMessages: async (userId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await coreApi.get(`/messages/${userId}`);
      set({
        messages: response.data,
        isLoading: false,
        hasInitialResponse: true,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  },

  setMessages: (fn) => set((state) => ({ messages: fn(state.messages) })),

  setHasInitialResponse: (hasInitialResponse) =>
    set({ hasInitialResponse }),

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await coreApi.get('/users');
      set({ users: response.data, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  },

  setUsers: (users) => set({ users }),

  selectUser: async (userId) => {
    const { users } = get();
    const user = users.find((user) => user.id === userId) || null;

    if (!user) {
      try {
        await get().fetchUsers();
        const updatedUser = get().users.find((user) => user.id === userId) || null;
        set({ selectedUser: updatedUser });

        if (updatedUser) {
          await get().fetchMessages(updatedUser.id);
        }
      } catch (error) {
        set({
          error: error instanceof Error ? error.message : "An error occurred",
        });
      }
    } else {
      set({ selectedUser: user });
      await get().fetchMessages(user.id);
    }
  },
}));

export default useChatStore;

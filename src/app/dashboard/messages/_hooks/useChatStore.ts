import { create } from "zustand";
import coreApi from "@/lib/coreApi";

export interface Message {
  id: number;
  avatar: string;
  name: string;
  message?: string;
  isLoading?: boolean;
  timestamp?: string;
  role?: string;
}

export interface UserData {
  id: number;
  avatar: string;
  message: string;
  name: string;
  timestamp: string;
  role: string;
}

interface State {
  input: string;
  messages: Message[];
  selectedUser: UserData | null;
  hasInitialResponse: boolean;
  isLoading: boolean;
  error: string | null;
  users: UserData[];
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
  setUsers: (users: UserData[]) => void;
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

  setMessages: (fn) => set(({ messages }) => ({ messages: fn(messages) })),

  setHasInitialResponse: (hasInitialResponse) =>
    set({ hasInitialResponse }),

  fetchUsers: async () => {
    try {
      const response = await coreApi.get('/users');
      set({ users: response.data });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  },

  setUsers: (users) => set({ users }),

  selectUser: async (userId) => {
    const user = get().users.find((user) => user.id === userId) || null;
    if (!user) {
      await get().fetchUsers();
      const updatedUser = get().users.find((user) => user.id === userId) || null;
      set({ selectedUser: updatedUser });

      if (updatedUser) {
        get().fetchMessages(updatedUser.id);
      }
    } else {
      set({ selectedUser: user });
      get().fetchMessages(user.id);
    }
  },
}));

export default useChatStore;

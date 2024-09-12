import { create } from 'zustand';
import { getDirectChat, getDirectChatMessageList } from '../../_services/chatsServices';
import { DirectChatType, MessageType } from '../../_types/chatsTypes';

interface ChatState {
  chat: DirectChatType | null;
  messages: MessageType[];
  isLoading: boolean;
  hasMoreMessages: boolean;
  ws: WebSocket | null;
  fetchChatData: (chatID: string, user: any) => Promise<void>;
  fetchMoreMessages: (chatID: string, offset: number) => Promise<void>;
  addMessage: (message: MessageType) => void;
  setWs: (ws: WebSocket | null) => void;
}

const MESSAGES_PER_LOAD = 20;

const useChatStore = create<ChatState>((set, get) => ({
  chat: null,
  messages: [],
  isLoading: false,
  hasMoreMessages: true,
  ws: null,

  // Fetch initial chat data and last MESSAGES_PER_LOAD messages
  fetchChatData: async (chatID: string, user: any) => {
    set({ isLoading: true });
    try {
      const { data: directChat } = await getDirectChat(chatID);
      const { data: directChatMessageList } = await getDirectChatMessageList(chatID, MESSAGES_PER_LOAD);
      set({ 
        chat: directChat, 
        messages: directChatMessageList, 
        hasMoreMessages: directChatMessageList.length >= MESSAGES_PER_LOAD 
      });
    } catch (err) {
      console.error("Error fetching chat data", err);
    } finally {
      set({ isLoading: false });
    }
  },

  // Fetch more messages on scroll (pagination)
  fetchMoreMessages: async (chatID: string, offset: number) => {
    if (!get().hasMoreMessages || get().isLoading) return;

    set({ isLoading: true });
    try {
      const { data: moreMessages } = await getDirectChatMessageList(chatID, MESSAGES_PER_LOAD, offset);
      set((state) => ({
        messages: [...moreMessages, ...state.messages],
        hasMoreMessages: moreMessages.length >= MESSAGES_PER_LOAD,
      }));
    } catch (err) {
      console.error("Error fetching more messages", err);
    } finally {
      set({ isLoading: false });
    }
  },

  // Add a message to the chat
  addMessage: (message: MessageType) => {
    set((state) => ({ messages: [...state.messages, message] }));
  },

  // Set the WebSocket connection
  setWs: (ws: WebSocket | null) => set({ ws }),
}));

export default useChatStore;
``
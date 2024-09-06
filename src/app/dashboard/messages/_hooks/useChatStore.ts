import { create } from "zustand";
import { DirectChatType, MessageType, UserType } from "../_types/chatsTypes";


interface State {
  input: string;
  messages: MessageType[];
  hasInitialResponse: boolean;
}

interface Actions {
  selectedUser: DirectChatType | null;
  setInput: (input: string) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  setMessages: (fn: (messages: MessageType[]) => MessageType[]) => void;
  setHasInitialResponse: (hasInitialResponse: boolean) => void;
}

const useChatStore = create<State & Actions>()(
  (set) => ({
    selectedUser: null,

    input: "",


    setInput: (input) => set({ input }),
    handleInputChange: (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => set({ input: e.target.value }),

    messages: [],
    setMessages: (fn) =>
      set(({ messages }) => ({ messages: fn(messages) })),

    hasInitialResponse: false,
    setHasInitialResponse: (hasInitialResponse) =>
      set({ hasInitialResponse }),
  })
);

export default useChatStore;
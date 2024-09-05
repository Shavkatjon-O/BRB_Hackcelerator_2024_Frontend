import { ChatBotMessages, Message, UserData, userData, Users } from "@/app/data";
import { create } from "zustand";

interface State {
  input: string;
  chatBotMessages: Message[];
  messages: Message[];
  hasInitialAIResponse: boolean;
  hasInitialResponse: boolean;
}

interface Actions {
  selectedUser: UserData;
  setInput: (input: string) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  setchatBotMessages: (
    fn: (chatBotMessages: Message[]) => Message[]
  ) => void;
  setMessages: (fn: (messages: Message[]) => Message[]) => void;
  setHasInitialAIResponse: (hasInitialAIResponse: boolean) => void;
  setHasInitialResponse: (hasInitialResponse: boolean) => void;
}

const useChatStore = create<State & Actions>()(
  (set) => ({
    selectedUser: Users[4],

    input: "",

    setInput: (input) => set({ input }),
    handleInputChange: (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => set({ input: e.target.value }),

    chatBotMessages: ChatBotMessages,
    setchatBotMessages: (fn) =>
      set(({ chatBotMessages }) => ({ chatBotMessages: fn(chatBotMessages) })),

    messages: userData[0].messages,
    setMessages: (fn) =>
      set(({ messages }) => ({ messages: fn(messages) })),

    hasInitialAIResponse: false,
    setHasInitialAIResponse: (hasInitialAIResponse) =>
      set({ hasInitialAIResponse }),

    hasInitialResponse: false,
    setHasInitialResponse: (hasInitialResponse) =>
      set({ hasInitialResponse }),
  })
);

export default useChatStore;
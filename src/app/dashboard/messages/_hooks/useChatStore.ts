import { Message, UserData, userData, Users } from "@/app/data";
import { create } from "zustand";

interface State {
  input: string;
  messages: Message[];
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
  setMessages: (fn: (messages: Message[]) => Message[]) => void;
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

    messages: userData[0].messages,
    setMessages: (fn) =>
      set(({ messages }) => ({ messages: fn(messages) })),

    hasInitialResponse: false,
    setHasInitialResponse: (hasInitialResponse) =>
      set({ hasInitialResponse }),
  })
);

export default useChatStore;

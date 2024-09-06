import { Message, UserData } from "@/constants/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React, { useEffect, useState } from "react";
import useChatStore from "../../_hooks/useChatStore";

import { DirectChatType, MessageType, UserType } from "../../_types/chatsTypes";

interface ChatProps {
  messages?: MessageType[];
  selectedUser: DirectChatType | null;
  isMobile: boolean;
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {
  const messagesState = useChatStore((state) => state.messages);

  console.log(messagesState);

  const sendMessage = (newMessage: MessageType) => {
    useChatStore.setState((state) => ({
      messages: [...state.messages, newMessage],
    }));
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messages}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}

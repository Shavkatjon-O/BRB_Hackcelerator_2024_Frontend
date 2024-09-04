import { Message, UserData } from "@/app/data";
import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React, { useEffect, useState } from "react";
import useChatStore from "@/hooks/useChatStore";


import { UserProfileType } from "@/types/authTypes";

interface ChatProps {
  messages: any[];
  selectedUser: UserProfileType;
  isMobile: boolean;
}


export function Chat({ messages, selectedUser, isMobile }: ChatProps) {

  if (!selectedUser) {
    return <div>No user selected</div>; // Or any fallback UI
  }
  
  const messagesState = useChatStore((state) => state.messages);

  const sendMessage = (newMessage: Message) => {
    useChatStore.setState((state) => ({
      messages: [...state.messages, newMessage],
    }));
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  );
}

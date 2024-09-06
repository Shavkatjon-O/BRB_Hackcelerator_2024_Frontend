"use client";

import React from "react";
import ChatListSidebar from "../_components/chat-list-sidebar";
import { useEffect, useState } from "react";
import { getDirectChatList } from "../_services/messagesServices";
import { DirectChatType } from "../_types/messagesTypes";

const Layout = ({ children }: { children: React.ReactNode} ) => {
  const [chats, setChats] = useState<DirectChatType[]>([]);

  useEffect(() => {
    getDirectChatList().then((response) => {
      setChats(response.data);
    });
  }, []);

  return (
    <div className="flex">
      <ChatListSidebar chats={chats} />
      {children}
    </div>
  );
}

export default Layout;
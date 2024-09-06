"use client";

import React from "react";
import ChatListSidebar from "../_components/chat-list-sidebar";
import { useEffect, useState } from "react";
import { DirectChatType } from "../_types/chatsTypes";
import { getUsers } from "../_services/chatsServices";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<DirectChatType[]>([]);

  useEffect(() => {
    getUsers().then((response) => {
      setChats(response.data);
    });
  }, []);
  
  return (
    <div className="flex size-full">
      <ChatListSidebar chats={chats} />
      {children}
    </div>
  );
};

export default Layout;
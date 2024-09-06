"use client";

import React from "react";
import ChatListSidebar from "../_components/chat-list-sidebar";
import { 
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";
import { useEffect, useState } from "react";
import { getDirectChatList } from "../_services/chatsServices";
import { DirectChatType } from "../_types/chatsTypes";

const Layout = ({ children }: { children: React.ReactNode} ) => {
  const [chats, setChats] = useState<DirectChatType[]>([]);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    getDirectChatList().then((response) => {
      setChats(response.data);
    });
  }, []);

  return (
    <div className="flex size-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel 
          onExpand={() => setIsCollapsed(false)}
          onCollapse={() => setIsCollapsed(true)}
          className="min-w-24 max-w-96"
        >
          <ChatListSidebar chats={chats} isCollapsed={isCollapsed} />
        </ResizablePanel>

        <ResizableHandle withHandle/>

        <ResizablePanel>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Layout;
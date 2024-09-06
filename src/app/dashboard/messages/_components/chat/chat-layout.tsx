"use client";

import { userData } from "@/constants/data";
import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Sidebar } from "../sidebar";
import { Chat } from "./chat";

import { DirectChatType, UserType, MessageType } from "../../_types/chatsTypes";
import { getDirectChatList } from "../../_services/chatsServices";
import { getDirectChatMessageList } from "../../_services/chatsServices";

interface ChatLayoutProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function ChatLayout({
  defaultLayout = [320, 480],
  defaultCollapsed = false,
  navCollapsedSize,
}: ChatLayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [selectedUser, setSelectedUser] = React.useState<DirectChatType | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [directChats, setDirectChats] = useState<DirectChatType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getDirectChatList().then((response) => {
      setDirectChats(response.data);
      setSelectedUser(response.data[0]);
      setIsLoaded(true);
    })

    if (selectedUser) {
      getDirectChatMessageList(String(selectedUser?.id)).then((response) => {
        setMessages(response.data);
      });
    }

    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkScreenWidth();
    
    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  
  if (!isLoaded) return null;
  if (!messages) return null;

  return (
    <ResizablePanelGroup
    direction="horizontal"
    onLayout={(sizes: number[]) => {
      document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            true
          )}`;
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            false
          )}`;
        }}
        className={cn(
          isCollapsed && "min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out"
        )}
      >
        <Sidebar
          isCollapsed={isCollapsed || isMobile}
          chats={
            directChats.map((chat) => {
              return {
                ...chat,
                variant: selectedUser && chat.id === selectedUser.id ? "secondary" : "ghost",
              };
            }) as DirectChatType[]
          }
          isMobile={isMobile}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <Chat
          messages={messages}
          selectedUser={selectedUser}
          isMobile={isMobile}
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

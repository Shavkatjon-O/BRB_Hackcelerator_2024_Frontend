"use client";

import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Sidebar } from "../sidebar";
import { Chat } from "./chat";
import { DirectChatType, MessageType } from "../../_types/chatsTypes";
import { getDirectChatList, getDirectChatMessageList } from "../../_services/chatsServices";

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
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [selectedUser, setSelectedUser] = useState<DirectChatType | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [directChats, setDirectChats] = useState<DirectChatType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Fetch direct chat list
  useEffect(() => {
    getDirectChatList()
      .then((response) => {
        setDirectChats(response.data);
        if (response.data.length > 0) {
          setSelectedUser(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Failed to load direct chats", error);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  // Fetch messages for the selected user
  useEffect(() => {
    if (selectedUser) {
      getDirectChatMessageList(String(selectedUser.id))
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error("Failed to load messages", error);
        });
    }
  }, [selectedUser]);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  // Early returns for loading state
  if (!isLoaded) return <div>Loading...</div>;
  if (!selectedUser) return <div>No chats available</div>;

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
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
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
        }}
        className={cn(
          isCollapsed && "min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out"
        )}
      >
        <Sidebar
          isCollapsed={isCollapsed || isMobile}
          chats={directChats.map((chat) => ({
            ...chat,
            variant: selectedUser && chat.id === selectedUser.id ? "secondary" : "ghost",
          }))}
          isMobile={isMobile}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <Chat messages={messages} selectedUser={selectedUser} isMobile={isMobile} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

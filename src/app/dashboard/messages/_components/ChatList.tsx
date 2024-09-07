import Link from "next/link";
import Image from "next/image";
import React from "react";
import useUser from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserType } from "../_types/chatsTypes";
import { DirectChatType } from "../_types/chatsTypes";
import { cn } from "@/lib/utils";

interface ChatListSidebarProps {
  chats: DirectChatType[];
  isCollapsed: boolean;
}

const ChatList = ({ chats, isCollapsed }: ChatListSidebarProps) => {
  const { user, isLoaded } = useUser();

  const renderChatUser = (chatUser: UserType) => {
    if (isCollapsed) {
      return (
        <div className="flex items-center">
          <div>
            <Avatar>
              <AvatarImage src={chatUser.image} />
              <AvatarFallback>{chatUser.email[0]}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <div>
          <Avatar>
            <AvatarImage src={chatUser.image} />
            <AvatarFallback>{chatUser.email[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <span>{chatUser.email}</span>
          <span className="text-sm text-green-500">Online</span>
        </div>
      </div>
    );
  };

  return (
    <div className="size-full">
      <ScrollArea className="size-full">
        {chats.map((chat) => {
          return (
            <Button
              key={chat.id}
              variant="ghost"
              asChild
              className={cn(
                "w-full py-4 flex items-center rounded-none border-b",
                isCollapsed ? "justify-center" : "justify-start"
              )}
            >
              <Link href={`/dashboard/messages/chats-direct/${chat.id}`} className="h-full">
                {isLoaded && user ? renderChatUser(chat.partner) : <div>Loading...</div>}
              </Link>
            </Button>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default ChatList;
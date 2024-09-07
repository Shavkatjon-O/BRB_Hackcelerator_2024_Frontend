"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import useUser from "@/hooks/useUser";
import useChatList from "../../_hooks/useChatList";

interface ChatListProps {
  isCollapsed: boolean;
}

const ChatList = ({ isCollapsed }: ChatListProps) => {
  const { user } = useUser();
  const { chats } = useChatList();
 
  return (
    <div className="size-full">
      <ScrollArea className="size-full">
        {chats.map((chat) => {
          const chatUser = chat.partner

          return (
            <Button
              key={chat.id}
              variant="ghost"
              asChild
              className="w-full"
            >
              <Link href={`/dashboard/messages/${chat.id}`} className="flex items-center gap-2 p-2">
                  <div>
                    {chatUser.image ? (
                      <Image src={chatUser.image} alt={chatUser.email} width={40} height={40} />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span>{chatUser.email}</span>
                    <span className="text-sm text-gray-500">Online</span>
                  </div>
              </Link>
            </Button>
          );
        })}
      </ScrollArea>
    </div>
  );
}

export default ChatList;
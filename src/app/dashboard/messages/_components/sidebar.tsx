"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MoreHorizontal, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  created_at: string;
  text: string;
  isLoaded: boolean;
}

interface Chat {
  id: number;
  name: string;
  messages: Message[];
  avatar: string;
  variant: "secondary" | "ghost";
}

interface SidebarProps {
  isCollapsed: boolean;
  chats: Chat[];
  onClick?: () => void;
  isMobile: boolean;
  userId: number;
}

export function Sidebar({
  chats,
  isCollapsed,
  isMobile,
  userId,
}: SidebarProps) {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [chatMessages, setChatMessages] = useState<Record<number, Message[]>>(
    chats.reduce((acc, chat) => {
      acc[chat.id] = chat.messages;
      return acc;
    }, {} as Record<number, Message[]>)
  );

  useEffect(() => {
    if (userId) {
      const websocket = new WebSocket(`ws://localhost:8001/ws/chats/${userId}/`);
      setWs(websocket);

      websocket.onmessage = (event) => {
        const { chatId, message }: { chatId: number; message: Message } = JSON.parse(event.data);

        setChatMessages((prevMessages) => ({
          ...prevMessages,
          [chatId]: [...(prevMessages[chatId] || []), message],
        }));
      };

      return () => {
        websocket.close();
      };
    }
  }, [userId]);

  return (
    <div
      data-collapsed={isCollapsed}
      className="relative group flex flex-col h-full bg-muted/10 dark:bg-muted/20 gap-4 p-2 data-[collapsed=true]:p-2 "
    >
      {!isCollapsed && (
        <div className="flex justify-between p-2 items-center">
          <div className="flex gap-2 items-center text-2xl">
            <p className="font-medium">Chats</p>
            <span className="text-zinc-300">({chats.length})</span>
          </div>

          <div>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-9 w-9"
              )}
            >
              <MoreHorizontal size={20} />
            </Link>

            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-9 w-9"
              )}
            >
              <SquarePen size={20} />
            </Link>
          </div>
        </div>
      )}
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {chats.map((chat) =>
          isCollapsed ? (
            <TooltipProvider key={chat.id}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: chat.variant, size: "icon" }),
                      "h-11 w-11 md:h-16 md:w-16",
                      chat.variant === "secondary" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <Avatar className="flex justify-center items-center">
                      <AvatarImage
                        src={chat.avatar}
                        alt={chat.avatar}
                        width={6}
                        height={6}
                        className="w-10 h-10"
                      />
                    </Avatar>{" "}
                    <span className="sr-only">{chat.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {chat.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Link
              key={chat.id}
              href="#"
              className={cn(
                buttonVariants({ variant: chat.variant, size: "lg" }),
                chat.variant === "secondary" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink",
                "justify-start gap-4"
              )}
            >
              <Avatar className="flex justify-center items-center">
                <AvatarImage
                  src={chat.avatar}
                  alt={chat.avatar}
                  width={6}
                  height={6}
                  className="w-10 h-10"
                />
              </Avatar>
              <div className="flex flex-col max-w-28">
                <span>{chat.name}</span>
                {chatMessages[chat.id]?.length > 0 && (
                  <span className="text-zinc-300 text-xs truncate">
                    {chatMessages[chat.id][chatMessages[chat.id].length - 1].text.split(" ")[0]}:
                    {chatMessages[chat.id][chatMessages[chat.id].length - 1].isLoaded
                      ? chatMessages[chat.id][chatMessages[chat.id].length - 1].text
                      : "Typing..."}
                  </span>
                )}
              </div>
            </Link>
          )
        )}
      </nav>
    </div>
  );
}

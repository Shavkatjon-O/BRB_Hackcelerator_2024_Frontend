"use client";

import Link from "next/link";
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

import DefaultAvatar from "./default-avatar";
import { DirectChatType } from "../_types/chatsTypes";
import useUser from "@/hooks/useUser";

interface SidebarProps {
  isCollapsed: boolean;
  chats: any[];
  onClick?: () => void;
  isMobile: boolean;
}

const allowedVariants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const;

type ButtonVariant = typeof allowedVariants[number];

const isValidVariant = (variant: string): variant is ButtonVariant =>
  allowedVariants.includes(variant as ButtonVariant);

export function Sidebar({ chats, isCollapsed }: SidebarProps) {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return null;

  const renderAvatar = (image: string | null) =>
    image ? (
      <Avatar className="flex justify-center items-center">
        <AvatarImage src={image} alt={image} width={6} height={6} className="w-10 h-10" />
      </Avatar>
    ) : (
      <DefaultAvatar />
    );

  const renderChatLink = (chatUser: any, variant: string, key: string) => (
    <Link
      key={key}
      href="#"
      className={cn(
        buttonVariants({
          variant: isValidVariant(variant) ? variant : "default",
          size: isCollapsed ? "icon" : "lg",
        }),
        isCollapsed ? "h-11 w-11 md:h-16 md:w-16" : "justify-start gap-4",
        variant === "secondary" &&
          "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
      )}
    >
      {renderAvatar(chatUser.image)}
      {!isCollapsed && (
        <div className="flex flex-col max-w-28">
          <span>{chatUser.email}</span>
        </div>
      )}
    </Link>
  );

  return (
    <div
      data-collapsed={isCollapsed}
      className="relative group flex flex-col h-full bg-muted/10 dark:bg-muted/20 gap-4 p-2 data-[collapsed=true]:p-2"
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
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}
            >
              <MoreHorizontal size={20} />
            </Link>
            <Link
              href="#"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}
            >
              <SquarePen size={20} />
            </Link>
          </div>
        </div>
      )}

      <nav className={cn("grid gap-1 px-2", isCollapsed && "group-[[data-collapsed=true]]:justify-center")}>
        {chats.map((chat, index) => {
          const chatUser = chat.user1.id === user.id ? chat.user1 : chat.user2;
          const otherUser = chat.user1.id === user.id ? chat.user2 : chat.user1;

          return isCollapsed ? (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  {renderChatLink(chatUser, chat.variant, index.toString())}
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {otherUser.email}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            renderChatLink(otherUser, chat.variant, index.toString())
          );
        })}
      </nav>
    </div>
  );
}

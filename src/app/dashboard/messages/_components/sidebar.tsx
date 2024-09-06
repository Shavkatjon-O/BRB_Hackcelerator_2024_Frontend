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

export function Sidebar({ chats, isCollapsed, isMobile }: SidebarProps) {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return null;

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
        {chats.map((chat, index) =>
          isCollapsed ? (
            chat.user1.id == user.id ? (
              <TooltipProvider key={index}>
                <Tooltip key={index} delayDuration={0}>
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
                      {
                        chat.user1.image ? (
                          <Avatar className="flex justify-center items-center">
                            <AvatarImage
                              src={chat.user1.image}
                              alt={chat.user1.image}
                              width={6}
                              height={6}
                              className="w-10 h-10 "
                            />
                          </Avatar>
                        ) : (
                          <DefaultAvatar />
                        )
                      } { " " }
                      <span className="sr-only">{chat.user1.email}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    {chat.user1.email}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <TooltipProvider key={index}>
                <Tooltip key={index} delayDuration={0}>
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
                      {
                        chat.user2.image ? (
                          <Avatar className="flex justify-center items-center">
                            <AvatarImage
                              src={chat.user2.image}
                              alt={chat.user2.image}
                              width={6}
                              height={6}
                              className="w-10 h-10 "
                            />
                          </Avatar>
                        ) : (
                          <DefaultAvatar />
                        )
                      } { " " }
                      <span className="sr-only">{chat.user2.email}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
                    {chat.user2.email}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          ) : (
            chat.user1.id == user.id ? (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: chat.variant, size: "lg" }),
                  chat.variant === "secondary" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink",
                  "justify-start gap-4"
                )}
              >
                {
                  chat.user1.image ? (
                    <Avatar className="flex justify-center items-center">
                      <AvatarImage
                        src={chat.user1.image}
                        alt={chat.user1.image}
                        width={6}
                        height={6}
                        className="w-10 h-10 "
                      />
                    </Avatar>
                  ) : (
                    <DefaultAvatar />
                  )
                }
                <div className="flex flex-col max-w-28">
                  <span>{chat.user1.email}</span>
                </div>
              </Link>
            ) : (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: chat.variant, size: "lg" }),
                  chat.variant === "secondary" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink",
                  "justify-start gap-4"
                )}
              >
                {
                  chat.user2.image ? (
                    <Avatar className="flex justify-center items-center">
                      <AvatarImage
                        src={chat.user2.image}
                        alt={chat.user2.image}
                        width={6}
                        height={6}
                        className="w-10 h-10 "
                      />
                    </Avatar>
                  ) : (
                    <DefaultAvatar />
                  )
                }
                <div className="flex flex-col max-w-28">
                  <span>{chat.user2.email}</span>
                </div>
              </Link>
            )
          )
        )}
      </nav>
    </div>
  );
}

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Info, Phone, Video } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ExpandableChatHeader } from "./ui/expandable-chat";
import { DirectChatType } from "../_types/chatsTypes";

interface ChatTopbarProps {
  selectedUser: DirectChatType;
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <ExpandableChatHeader>
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.partner.image}
            alt={selectedUser.partner.email}
            width={6}
            height={6}
            className="w-10 h-10 "
          />
          <AvatarFallback>{selectedUser.partner.email[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.partner.email}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>

      <div className="flex gap-1">
        {TopbarIcons.map((icon, index) => (
          <Link
            key={index}
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9",
            )}
          >
            <icon.icon size={20} className="text-muted-foreground" />
          </Link>
        ))}
      </div>
    </ExpandableChatHeader>
  );
}
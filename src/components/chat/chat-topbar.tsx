import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { UserData } from '@/app/data';
import { Info, Phone, Video } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

import { UserProfileType } from "@/types/authTypes";

interface ChatTopbarProps {
  selectedUser: UserProfileType;
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];


export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <div className="w-full bg-background h-20 flex p-4 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.image}
            alt={selectedUser.email}
            width={6}
            height={6}
            className="w-10 h-10 "
          />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.email}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>

      <div className='flex gap-1'>
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
    </div>
  )
}

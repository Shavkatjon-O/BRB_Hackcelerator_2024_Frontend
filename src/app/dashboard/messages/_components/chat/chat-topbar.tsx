import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { UserData } from '@/constants/data';
import { Info, Phone, Video } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import DefaultAvatar from '../default-avatar';
import { DirectChatType } from '../../_types/chatsTypes';
import useUser from '@/hooks/useUser';

interface ChatTopbarProps {
  selectedUser: DirectChatType | null;
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  const { user, isLoaded } = useUser();

  if (!selectedUser) return null;
  if (!isLoaded || !user) return null;

  return (
    <div className="w-full bg-background h-20 flex p-4 justify-between items-center border-b">
      {
        selectedUser.user1.id !== user.id ? (
          <div className="flex items-center gap-2">
            {
              selectedUser.user1.image ? (
                <Avatar className="flex justify-center items-center">
                  <AvatarImage
                    src={selectedUser.user1.image}
                    alt={selectedUser.user1.email}
                    width={6}
                    height={6}
                    className="w-10 h-10 "
                  />
                </Avatar>
              ) : (
                <DefaultAvatar />
              )
            }
            <div className="flex flex-col">
              <span className="font-medium">{selectedUser.user1.email}</span>
              <span className="text-xs">Active 2 mins ago</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {
              selectedUser.user2.image ? (
                <Avatar className="flex justify-center items-center">
                  <AvatarImage
                    src={selectedUser.user2.image}
                    alt={selectedUser.user2.email}
                    width={6}
                    height={6}
                    className="w-10 h-10 "
                  />
                </Avatar>
              ) : (
                <DefaultAvatar />
              )
            }
            <div className="flex flex-col">
              <span className="font-medium">{selectedUser.user2.email}</span>
              <span className="text-xs">Active 2 mins ago</span>
            </div>
          </div>
        )
      }


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

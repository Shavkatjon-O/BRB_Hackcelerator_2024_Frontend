"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Users, Search, House } from "lucide-react";
import { useState, useEffect } from "react";
import { DirectChatType } from "../_types/messagesTypes";
import { Button } from "@/components/ui/button";
import DefaultAvatar from "./default-avatar";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import { getDirectChatList } from "../_services/messagesServices";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";

const ChatSidebar = () => {
  const { user, isLoaded } = useUser();
  const [directChats, setDirectChats] = useState<DirectChatType[]>([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchChats = async () => {
      if (isLoaded && user) {
        setLoading(true); // Set loading to true before fetching
        try {
          const { data } = await getDirectChatList();
          setDirectChats(data);
        } catch (error) {
          console.error("Failed to fetch direct chats", error);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      }
    };

    fetchChats();
  }, [isLoaded, user]);

  const renderChatUser = (chatUser: { id: number; image?: string; email: string }) => (
    <div className="flex items-center gap-2 overflow-x-hidden">
      <div>
        {chatUser.image ? (
          <Image src={chatUser.image} alt={chatUser.email} width={40} height={40} />
        ) : (
          <DefaultAvatar />
        )}
      </div>
      <div className="flex flex-col">
        <span>{chatUser.email}</span>
        <span className="text-sm text-green-500">Online</span>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full p-4">
      <Tabs defaultValue="chats-direct" className="w-full space-y-4">
        <TabsList className="w-full min-h-14 h-full flex flex-wrap">
          <TabsTrigger value="chats-all" className="flex-1 min-w-[4rem] gap-1 p-4">
            <House className="w-[1.2rem] h-[1.2rem]" />
          </TabsTrigger>
          <TabsTrigger value="chats-direct" className="flex-1 min-w-[4rem] gap-1 p-4">
            <User className="w-[1.2rem] h-[1.2rem]" />
          </TabsTrigger>
          <TabsTrigger value="chats-group" className="flex-1 min-w-[4rem] gap-1 p-4">
            <Users className="w-[1.2rem] h-[1.2rem]" />
          </TabsTrigger>
          <TabsTrigger value="search-people" className="flex-1 min-w-[4rem] gap-1 p-4">
            <Search className="w-[1.2rem] h-[1.2rem]" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chats-all">
          {/* Add content for all chats if needed */}
        </TabsContent>
        <TabsContent value="chats-direct">
          <ScrollArea className="w-full h-full">
            <div className="space-y-4">
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2 p-4">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col flex-grow">
                      <Skeleton className="h-4 mb-1" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                ))
              ) : (
                directChats.map((chat) => {
                  const chatUser = chat.user1.id === Number(user?.id) ? chat.user2 : chat.user1;

                  return (
                    <Button key={chat.id} variant="outline" asChild className="w-full py-8 flex justify-start">
                      <Link href={`/dashboard/messages/chats-direct/${chat.id}`}>
                        {isLoaded && user ? renderChatUser(chatUser) : <div>Loading...</div>}
                      </Link>
                    </Button>
                  );
                })
              )}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="chats-group">
          {/* Add content for group chats if needed */}
        </TabsContent>
        <TabsContent value="search-people">
          {/* Add content for searching people if needed */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChatSidebar;

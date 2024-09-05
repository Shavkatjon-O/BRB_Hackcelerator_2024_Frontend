"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import coreApi from "@/lib/coreApi";
import Link from "next/link";

const getUsers = async () => {
  const response = await coreApi.get("/chats/users/");
  return response.data;
}

const getDirectChats = async () => {
  const response = await coreApi.get("/chats/direct/");
  return response.data;
}

const getGroupChats = async () => {
  const response = await coreApi.get("/chats/group/");
  return response.data;
}

interface UserType {
  id: number;
  email: string;
}

interface DirectChatType {
  id: number;
  users: UserType[];
}

interface GroupChatType {
  id: number;
  users: UserType[];
  title: string;
  image: string;
}

const Page = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [directChats, setDirectChats] = useState<DirectChatType[]>([]);
  const [groupChats, setGroupChats] = useState<GroupChatType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    Promise.all([
      getUsers(),
      getDirectChats(),
      getGroupChats(),
    ]).then(([users, directChats, groupChats]) => {
      setUsers(users);
      setDirectChats(directChats);
      setGroupChats(groupChats);
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // console.log(users);
  // console.log(directChats);
  // console.log(groupChats);

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col space-y-4">
        {users.map((user) => (
          <Button key={user.id} asChild>
            <Link href={`/dashboard/messages/${user.id}`}>
              <span>{user.email}</span>
            </Link>
          </Button>
        ))}
      </div>

      <Separator className="dark:bg-white" />

      <div className="flex flex-col space-y-4">
        {directChats.map((chat) => (
          <Button key={chat.id} asChild>
            <Link href={`/dashboard/messages/direct-chats/${chat.id}`}>
              <span>{chat.users.map((user) => user.email).join(", ")}</span>
            </Link>
          </Button>
        ))}
      </div>

      <Separator className="dark:bg-white" />

      <div className="flex flex-col space-y-4">
        {groupChats.map((chat) => (
          <Button key={chat.id} asChild>
            <Link href={`/dashboard/messages/group-chats/${chat.id}`}>
              <span>{chat.title}</span>
            </Link>
          </Button>
        ))}
      </div>

    </div>
  );
}

export default Page;
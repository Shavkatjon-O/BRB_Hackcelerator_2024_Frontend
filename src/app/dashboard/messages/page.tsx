"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { getUsers, getDirectChatList } from "./_services/messagesServices";

import { UserType, DirectChatType } from "./_types/messagesTypes";

import Link from "next/link";

const Page = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [directChats, setDirectChats] = useState<DirectChatType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch users and direct chats concurrently
    Promise.all([
      getUsers(),
      getDirectChatList()
    ]).then(([usersResponse, directChatsResponse]) => {
      setUsers(usersResponse.data);
      setDirectChats(directChatsResponse.data);
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Users</h2>
      {users.map((user) => (
        <Button key={user.id} asChild>
          <Link href={`/dashboard/messages/${user.id}`}>
            <span>{user.email}</span>
          </Link>
        </Button>
      ))}

      <h2 className="text-xl font-bold">Direct Chats</h2>
      {directChats.map((chat) => {
        const otherUser = chat.user1.id !== 1 ? chat.user1 : chat.user2; // Replace 1 with the current user's ID
        return (
          <Button key={chat.id} asChild>
            <Link href={`/dashboard/messages/directs/${chat.id}`}>
              <span>Chat with {otherUser.email}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default Page;

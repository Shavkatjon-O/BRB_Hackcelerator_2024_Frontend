"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { DefaultUserAvatar } from "./_components/DefaultUserAvatar";
import coreApi from "@/lib/coreApi";

interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  image: string;
}

const Page = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    coreApi.get("/chats/users/").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col space-y-4 p-4">
      {users.map((user) => (
        <Link key={user.id} href={`/dashboard/messages/${user.id}`}>
          <div className="w-full flex items-center space-x-4 border p-4">
            <DefaultUserAvatar />
            <div className="flex flex-col">
              <span>{user.first_name} {user.last_name}</span>
              <span className="text-sm">{user.email}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Page;
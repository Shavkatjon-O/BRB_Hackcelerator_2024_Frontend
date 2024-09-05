"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import coreApi from "@/lib/coreApi";
import Link from "next/link";

interface UserType {
  id: number;
  email: string;
}

const Page = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    coreApi.get("/chats/users/").then((response) => {
      setUsers(response.data);
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(users);
  
  return (
    <div className="flex flex-col space-y-4 p-4">
      {users.map((user) => (
        <Button key={user.id} asChild>
          <Link href={`/dashboard/messages/${user.id}`}>
            <span>{user.email}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default Page;
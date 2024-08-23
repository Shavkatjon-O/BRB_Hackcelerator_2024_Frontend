"use client";

import { Button } from "@/components/ui/button"

import Link from "next/link"
import Image from "next/image"

import useUser from "@/hooks/useUser";
import { User } from "lucide-react";

const Header = () => {
  const { user } = useUser();

  return (
    <header className="h-16 px-8 absolute top-0 left-0 right-0 border-b flex justify-between items-center border-b-gray-300">
      <Link href="/" className="text-2xl font-bold flex items-center">
        <Image 
          src="/brb-titans-logo.png"
          alt="BRB Titans Logo"
          width={40}
          height={40}  
          className="mr-2"
        />
        BRB Titans
      </Link>

      <div className="flex items-center">
        {user ? (
          <>
            <div className="mr-2">{user.email}</div>
            {user.image ? (
              console.log(user.image),
              <Link href="/dashboard/profile">
                <Image 
                  src={user.image}
                  alt="User Profile Image"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                />
              </Link>
            ) : (
              <div className="p-2 border border-gray-500">
                <User className="w-6 h-6" />
              </div>
            )}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>

    </header>
  );
};

export default Header;
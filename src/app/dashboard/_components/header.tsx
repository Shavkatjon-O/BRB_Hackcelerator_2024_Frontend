"use client";

import useUser from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { User, Loader } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { user, isLoaded, error } = useUser();

  return (
    <header className="bg-white dark:bg-slate-950 border-b h-16 z-50 flex items-center shadow-sm">
      <div className="h-full container mx-auto px-4 flex items-center justify-end">
        {
          !isLoaded ? (
            <div className="flex items-center space-x-2 text-sm">
              <Loader className="w-4 h-4 animate-spin" />
              <span>Loading...</span>
            </div>
          ) : error ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <Button asChild variant="link">
                <Link href="/dashboard/profile" className="space-x-2">
                  <span>{user?.email}</span>
                  <User className="w-5 h-5" />
                </Link>
              </Button>
              <ModeToggle />
            </>
          )
        }
      </div>
    </header>
  );
}

export default Header;

"use client";

import useUser from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { User, Loader } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { user, loading, error } = useUser();

  return (
    <header className="bg-slate-950 text-slate-100 h-14 container px-4 flex items-center justify-end">
      {
        loading ? (
          <div className="flex items-center space-x-2 text-sm">
            <Loader className="w-4 h-4 animate-spin" />
            <span>Loading...</span>
          </div>
        ) : error ? (
          <span>Error: {error.message}</span>
        ) : (
          <Button asChild variant="link" className="text-slate-100">
            <Link href="/dashboard/profile" className="space-x-2">
              <span>{user?.email}</span>
              <User className="w-5 h-5" />
            </Link>
          </Button>
        )
      }
    </header>
  );
}

export default Header;

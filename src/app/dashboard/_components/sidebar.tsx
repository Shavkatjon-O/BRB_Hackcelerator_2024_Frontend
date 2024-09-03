"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Bot,
  Calendar,
  CalendarCheck,
  MessageSquareText,
  Bell,
  User,
  FileCheck,
  Settings,
  SquareCheckBig,
  LogOut,
  MoreVertical,
  ChevronFirst,
  ChevronLast, 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useUser from "@/hooks/useUser";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquareText },
  { href: "/dashboard/meetings", label: "Video & Calls", icon: CalendarCheck },
  { href: "/dashboard/events", label: "Events & Calendar", icon: Calendar },
  { href: "/dashboard/tasks", label: "Tasks", icon: SquareCheckBig },
  { href: "/dashboard/requests", label: "Requests & Approvals", icon: FileCheck },
  { href: "/dashboard/assistant", label: "AI Assistant", icon: Bot },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/profile", label: "Profile", icon: User },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, isLoaded, error } = useUser();

  return (
    <aside className={`h-screen border-r transition-all duration-300 ease-in-out shadow-sm bg-white dark:bg-slate-950 ${ isOpen ? "w-64" : "w-20"}`}>
      <div className="h-full flex flex-col justify-between">
        <div className="p-4 flex justify-between items-center">
          <Link href="/" className={`flex items-center text-lg font-bold transition-opacity duration-300 ${ isOpen ? "block" : "hidden" }`}>
            <Image
              width={32}
              height={32}
              src="/brb-titans-logo.jpg"
              className="w-10 h-10 rounded-lg"
              alt="BRB Titans Logo"
              priority
            />
            <span className="ml-2 text-nowrap">BRB Titans</span>
          </Link>
          <Button 
            variant="ghost" 
            className="w-12 h-12 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronFirst /> : <ChevronLast />}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
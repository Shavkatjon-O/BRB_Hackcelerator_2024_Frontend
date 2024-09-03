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
  ChevronFirst,
  ChevronLast,
  CreditCard,
  ArrowLeftRight,
  BadgeDollarSign,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useUser from "@/hooks/useUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";


// cards
// payments
// transactions
// upload

const bankTellerLinks = [
  { href: "/dashboard/cards", label: "Cards", icon: CreditCard },
  { href: "/dashboard/transactions", label: "Transactions", icon: ArrowLeftRight },
  { href: "/dashboard/payments", label: "Payments", icon: BadgeDollarSign },
  { href: "/dashboard/upload", label: "Upload", icon: Upload },
];

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  ...bankTellerLinks,
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
  const { user, isLoaded } = useUser();
  const pathname = usePathname();

  return (
    <aside className={`h-screen border-r transition-all duration-300 ease-in-out shadow-sm bg-white dark:bg-slate-950 ${isOpen ? "w-64" : "w-20"}`}>
      <div className="h-full flex flex-col justify-between shadow-sm">
        <div className="p-4 border-b flex justify-between items-center">
          <Link href="/" className={`flex items-center text-lg font-bold transition-opacity duration-300 ${isOpen ? "block" : "hidden"}`}>
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

        <nav className="flex flex-col max-h-full space-y-2 overflow-y-scroll p-4">
          {links.map(({ href, label, icon: Icon }) => (
            <Button
              key={href}
              asChild
              variant={pathname === href ? "default" : "ghost"}
              className={`w-full p-3 h-full flex ${isOpen ? "justify-start" : "justify-center"}`}
            >
              <Link href={href} className="flex items-center space-x-2 w-full">
                <Icon size={24} className="flex-shrink-0" />
                <span className={`transition-opacity duration-700 ${isOpen ? "block" : "hidden"} ml-2`}>
                  {label}
                </span>
              </Link>
            </Button>
          ))}
        </nav>

        <div className="p-4 border-t shadow-sm">
          {isLoaded && user && (
            <Link href="/dashboard/profile" className={`flex items-center ${ isOpen ? "" : "justify-center" }`}>
              <Avatar className="w-10 h-10">
                <AvatarImage src={user.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className={`text-sm ml-2 transition-all duration-500 ${isOpen ? "block" : "hidden"}`}>{user.email}</span>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

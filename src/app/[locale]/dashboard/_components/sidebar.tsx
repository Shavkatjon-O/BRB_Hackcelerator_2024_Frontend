"use client";

import {Link} from '@/i18n/routing';;
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
  LogOut,
  HelpCircle,
  House,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react";
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import useUser from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import { Separator } from '@/components/ui/separator';

import { defaultLinks } from '../_constants/sidebarLinks';

const bankTellerLinks = [
  { href: "/dashboard/cards", label: "Cards", icon: CreditCard },
  { href: "/dashboard/transactions", label: "Transactions", icon: ArrowLeftRight },
  { href: "/dashboard/payments", label: "Payments", icon: BadgeDollarSign },
  { href: "/dashboard/upload", label: "Upload", icon: Upload },
];


// const defaultLinks = {
//   "General": [
//     { href: "/dashboard", label: "Home", icon: House },
//     { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
//     { href: "/dashboard/messages", label: "Messages", icon: MessageSquareText },
//     { href: "/dashboard/requests", label: "Requests & Approvals", icon: FileCheck },
//     { href: "/dashboard/announcements", label: "Announcements", icon: FileCheck },
//     { href: "/dashboard/events", label: "Events & Calendar", icon: Calendar },
//     { href: "/dashboard/documents", label: "Documents", icon: FileCheck },
//     { href: "/dashboard/meetings", label: "Video & Call Meetings", icon: CalendarCheck },
//     { href: "/dashboard/tasks", label: "Tasks Management", icon: SquareCheckBig },
//     { href: "/dashbaord/reports", label: "Reports", icon: FileCheck },
//     { href: "/dashboard/assistants", label: "AI Assistant", icon: Bot },
//   ],
//   "Other": [
//     { href: "/dashboard/profile", label: "Profile", icon: User },
//     { href: "/dashboard/settings", label: "Settings", icon: Settings },
//     { href: "/dashboard/help", label: "Help", icon: HelpCircle },
//     { href: "/sign-out", label: "Sign Out", icon: LogOut },
//   ],
// }

const baseLinks = [
  // General
  { href: "/dashboard", label: "Home", icon: House },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquareText },
  { href: "/dashboard/requests", label: "Requests & Approvals", icon: FileCheck },
  { href: "/dashboard/announcements", label: "Announcements", icon: FileCheck },
  { href: "/dashboard/events", label: "Events & Calendar", icon: Calendar },
  { href: "/dashboard/documents", label: "Documents", icon: FileCheck },
  { href: "/dashboard/meetings", label: "Video & Call Meetings", icon: CalendarCheck },
  { href: "/dashboard/tasks", label: "Tasks Management", icon: SquareCheckBig },
  { href: "/dashbaord/reports", label: "Reports", icon: FileCheck },
  { href: "/dashboard/assistants", label: "AI Assistant", icon: Bot },
  // Other
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/help", label: "Help", icon: HelpCircle },
  { href: "/sign-out", label: "Sign Out", icon: LogOut },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, isLoaded } = useUser();
  const pathname = usePathname();

  if (!isLoaded) return null;

  const getLinksForUserType = () => {
    if (user?.user_type === "BANK_TELLER") {
      return [...bankTellerLinks, ...baseLinks];
    }
    return baseLinks; 
  };

  const links = getLinksForUserType();

  return (
    <aside className={`h-screen border-r transition-all duration-300 ease-in-out shadow-lg z-50 bg-white dark:bg-slate-950 ${isOpen ? "w-64" : "w-20"}`}>
      <div className="h-full flex flex-col justify-between shadow-sm">
        <div className="p-4 h-16 border-b flex justify-between items-center">
          <Link href="/dashboard" className={`flex items-center text-lg font-bold ${isOpen ? "block" : "hidden"}`}>
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

        <ScrollArea>
          <nav className="flex flex-col max-h-full space-y-2 p-4">
            {/* {links.map(({ href, label, icon: Icon }) => (
              <Button
                key={href}
                asChild
                variant={pathname === href ? "default" : "ghost"}
                className={`w-full py-2 px-3 h-full flex ${
                  cn(
                    isOpen ? "justify-start" : "justify-center",
                    pathname !== href ? "text-slate-500 dark:text-slate-300" : ""
                  )
                }`}
              >
                <Link href={href} className="flex items-center space-x-2 w-full">
                  <Icon size={24} className="h-5 w-5" />
                  <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                    {label}
                  </span>
                </Link>
              </Button>
            ))} */}

            {Object.entries(defaultLinks).map(([title, links]) => (
              <div key={title} className="space-y-2">
                {
                  isOpen ? (
                    <h3 className="text-sm text-slate-500 dark:text-slate-300">{title}</h3>
                  ) : (
                    <Separator />
                  )
                }
                {links.map(({ href, label, icon: Icon }) => (
                  <Button
                    key={href}
                    asChild
                    variant={pathname === href ? "default" : "ghost"}
                    className={`w-full py-2 px-3 h-full flex ${
                      cn(
                        isOpen ? "justify-start" : "justify-center",
                        pathname !== href ? "text-slate-500 dark:text-slate-300" : ""
                      )
                    }`}
                  >
                    <Link href={href} className="flex items-center space-x-2 w-full">
                      <Icon size={24} className="h-5 w-5" />
                      <span className={`${isOpen ? "block" : "hidden"} ml-2`}>
                        {label}
                      </span>
                    </Link>
                  </Button>
                ))}
              </div>
            ), [])} 

          </nav>
        </ScrollArea>

        <div className={`p-4 px-5 h-16 flex items-center ${isOpen ? "justify-start" : "justify-center"} border-t shadow-sm overflow-hidden`}>
          {isLoaded && user && (
            <Link href="/dashboard/profile" className={`flex items-center ${ isOpen ? "" : "justify-center" }`}>
              <Avatar className="w-10 h-10">
                <AvatarImage src={user.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className={`text-sm ml-2 ${isOpen ? "block" : "hidden"}`}>{user.email}</span>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

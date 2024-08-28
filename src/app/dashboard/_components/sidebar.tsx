import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
  Menu,
} from "lucide-react"

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
  return (
    <div className="bg-slate-950 text-slate-100 max-w-64 min-h-screen p-4 space-y-4 flex flex-col justify-between">
      <div className="px-0 lg:px-4 h-12 flex items-center">
        <div className="hidden lg:flex items-center text-lg font-bold">
          <Image
            alt="BRB Titans Logo"
            src="/brb-titans-logo.png"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          /> 
          <span className="ml-2 hidden lg:flex">BRB Titans</span>
        </div>

        <Button variant="ghost" className="w-full justify-start lg:hidden">
          <Menu />
        </Button>
      </div>

      <div className="space-y-4">
        <Separator className="bg-slate-600" />

        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href={link.href}><link.icon className="mr-0 lg:mr-2" />
                <span className="hidden lg:flex">
                  {link.label}
                </span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        
        <Separator className="bg-slate-500" />
      </div>

      <Button asChild variant="destructive" className="w-full justify-start">
        <Link href="/sign-out">
          <LogOut />
          <span className="ml-0 lg:ml-2 hidden lg:flex font-bold">Sign out</span>
        </Link>
      </Button>
    </div>
  );
};

export default Sidebar;

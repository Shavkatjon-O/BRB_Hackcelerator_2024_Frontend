"use client";

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Bot, Calendar, CalendarCheck, MessageSquareText, Bell, User, FileCheck, Settings, SquareCheckBig } from "lucide-react";

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <aside className="h-screen z-50">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="/brb-titans-logo.jpg"
            width={128}
            height={32}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            {links.map(({ href, label, icon: Icon }) => (
              <SidebarItem key={href} icon={<Icon />} text={label} href={href} />
            ))}
            {children}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <Image
            src="/avatar.jpg"
            width={40}
            height={40}
            alt="User Avatar"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active, alert, href }) => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('SidebarItem must be used within a Sidebar');
  }

  const { expanded } = context;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <Link href={href} className="flex items-center w-full">
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
      </Link>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

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

export default Sidebar;

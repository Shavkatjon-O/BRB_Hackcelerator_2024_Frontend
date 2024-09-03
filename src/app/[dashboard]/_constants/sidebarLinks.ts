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
  X,
  Landmark,
  Layers,
  BadgeDollarSign,
  CreditCard,
  Upload,
  Headset,
} from "lucide-react";

const defaultLinks = [
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
  { href: "/desktop-1", label: "Bank Teller", icon: Landmark },
];

const bankTellerLinks = [
  ...defaultLinks,
  { href: "/desktop-1", label: "Bank Teller", icon: Landmark },
  { href: "/desktop2", label: "Bank Teller", icon: Layers },
  { href: "/desktop3", label: "Bank Teller", icon: BadgeDollarSign },
  { href: "/desktop4", label: "Bank Teller", icon: CreditCard },
  { href: "/desktop5", label: "Bank Teller", icon: Upload },
  { href: "/desktop6", label: "Bank Teller", icon: Settings },
  { href: "/desktop7", label: "Bank Teller", icon: Headset },
  { href: "/desktop8", label: "Bank Teller", icon: Landmark },
  { href: "/desktop9", label: "Bank Teller", icon: Landmark },
];

export default bankTellerLinks;
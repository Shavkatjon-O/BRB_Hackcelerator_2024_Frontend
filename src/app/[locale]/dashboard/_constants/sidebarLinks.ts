import {
  House,
  Bell,
  MessageSquareText,
  CheckSquare,
  Megaphone,
  Calendar,
  File,
  Camera,
  ListChecks,
  PieChart,
  Bot,
  User,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export const defaultLinks = {
  "General": [
    { href: "/dashboard", label: "Home", icon: House },
    { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
    { href: "/dashboard/messages", label: "Messages", icon: MessageSquareText },
    { href: "/dashboard/requests", label: "Requests & Approvals", icon: CheckSquare },
    { href: "/dashboard/announcements", label: "Announcements", icon: Megaphone },
    { href: "/dashboard/events", label: "Events & Calendar", icon: Calendar },
    { href: "/dashboard/documents", label: "Documents", icon: File },
    { href: "/dashboard/meetings", label: "Video & Call Meetings", icon: Camera },
    { href: "/dashboard/tasks", label: "Tasks Management", icon: ListChecks },
    { href: "/dashbaord/reports", label: "Reports", icon: PieChart },
    { href: "/dashboard/assistants", label: "AI Assistant", icon: Bot },
  ],
  "Other": [
    { href: "/dashboard/profile", label: "Profile", icon: User },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/dashboard/help", label: "Help", icon: HelpCircle },
    { href: "/sign-out", label: "Sign Out", icon: LogOut },
  ],
}
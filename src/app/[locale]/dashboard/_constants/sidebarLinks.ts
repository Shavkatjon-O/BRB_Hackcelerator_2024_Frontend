import {
  Bell,
  MessageSquareText,
  CheckSquare,
  Megaphone,
  Calendar,
  File,
  Camera,
  ListChecks,
  PieChart,
  User,
  Settings,
  HelpCircle,
  LogOut,
  CreditCard,
  BadgeDollarSign,
  Users,
  House,
  LibraryBig,
  HandCoins,
  CirclePercent,
  Headset,
} from "lucide-react";
import { UserProfileType } from "@/types/authTypes";

const getSidebarLinks = (currentUser: UserProfileType, translate: any) => {
  const home = [
    { href: '/dashboard', label: translate("home"), icon: House },
  ];
  
  const defaultGeneral = [
    { href: "/dashboard/notifications", label: translate("notifications"), icon: Bell },
    { href: "/dashboard/messages", label: translate("messages"), icon: MessageSquareText },
    { href: "/dashboard/meetings", label: translate("meetings"), icon: Camera },
    { href: "/dashboard/events", label: translate("events"), icon: Calendar },
    { href: "/dashboard/documents", label: translate("documents"), icon: File },
    { href: "/dashboard/requests", label: translate("requests"), icon: CheckSquare },
    { href: "/dashboard/announcements", label: translate("announcements"), icon: Megaphone },
    { href: "/dashboard/tasks", label: translate("tasks"), icon: ListChecks },
    { href: "/dashboard/reports", label: translate("reports"), icon: PieChart },
  ];

  const defaultOther = [
    { href: "/dashboard/profile", label: translate("profile"), icon: User },
    { href: "/dashboard/settings", label: translate("settings"), icon: Settings },
    { href: "/dashboard/help", label: translate("help"), icon: HelpCircle },
    { href: "/sign-out", label: translate("signOut"), icon: LogOut },
  ];

  const bankTeller = [
    { href: '/dashboard/cards', label: translate('cards'), icon: CreditCard },
    { href: '/dashboard/payments', label: translate('payments'), icon: BadgeDollarSign },
    { href: '/dashboard/clients', label: translate('clients'), icon: Users },
  ];

  const loanManager = [
    { href: '/dashboard/borrowers', label: translate('borrowers'), icon: HandCoins },
    { href: '/dashboard/applications', label: translate('applications'), icon: LibraryBig },
    { href: '/dashboard/payments', label: translate('payments'), icon: BadgeDollarSign },
    { href: '/dashboard/loans', label: translate('loans'), icon: CirclePercent },
    { href: '/dashboard/telephony', label: translate('aiTelephony'), icon: Headset },
    { href: '/dashboard/clients', label: translate('clients'), icon: Users },
  ];

  const userSpecificLinks = currentUser.user_type === 'loanManager' ? loanManager : bankTeller;

  return {
    Dashboard: [...home],
    General: [...defaultGeneral],
    Menu: [...userSpecificLinks],
    Other: [...defaultOther],
  };
};

export default getSidebarLinks;

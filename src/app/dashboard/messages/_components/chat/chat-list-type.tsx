import { Button } from "@/components/ui/button";
import { User, Users, Search, House } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const items = [
  { href: "/dashboard/messages", icon: House, text: "All Chats" },
  { href: "/dashboard/messages/chats-explore", icon: Search, text: "Search People" },
  { href: "/dashboard/messages/chats-direct", icon: User, text: "Direct Chats" },
  { href: "/dashboard/messages/chats-group", icon: Users, text: "Group Chats" },
];

interface SidebarItemProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon: Icon, text }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" className="p-4 h-max" asChild>
        <Link href={href}>
          <Icon className="w-[1.2rem] h-[1.2rem]" />
        </Link>
      </Button>
    </TooltipTrigger>
    <TooltipContent side="right" className="mb-8 ml-2 dark:bg-slate-800">{text}</TooltipContent>
  </Tooltip>
);

const ChatListType: React.FC = () => {
  return (
    <TooltipProvider delayDuration={2}>
      <div className="h-full flex flex-col p-4 space-y-4 border-r">
        {items.map((item, index) => (
          <SidebarItem key={index} href={item.href} icon={item.icon} text={item.text}/>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default ChatListType;

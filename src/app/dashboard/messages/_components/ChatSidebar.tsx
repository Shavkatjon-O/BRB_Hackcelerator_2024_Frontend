import { Button } from "@/components/ui/button";
import { User, Users, Search, House } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface SidebarItemProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tooltipText: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon: Icon, tooltipText }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" className="p-4 h-max" asChild>
        <Link href={href}>
          <Icon className="w-[1.2rem] h-[1.2rem]" />
        </Link>
      </Button>
    </TooltipTrigger>
    <TooltipContent side="right" className="mb-8 ml-2 dark:bg-slate-800">{tooltipText}</TooltipContent>
  </Tooltip>
);

const ChatSidebar: React.FC = () => {
  return (
    <TooltipProvider delayDuration={2}>
      <div className="h-full flex flex-col p-4 space-y-4 border-r">
        <SidebarItem 
          href="/dashboard/messages" 
          icon={House} 
          tooltipText="All Chats" 
        />
        <SidebarItem 
          href="/dashboard/messages/chats-explore" 
          icon={Search} 
          tooltipText="Search People" 
        />
        <SidebarItem 
          href="/dashboard/messages/chats-direct" 
          icon={User} 
          tooltipText="Direct Chats" 
        />
        <SidebarItem 
          href="/dashboard/messages/chats-group" 
          icon={Users} 
          tooltipText="Group Chats" 
        />
      </div>
    </TooltipProvider>
  );
};

export default ChatSidebar;
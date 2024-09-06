import { Button } from "@/components/ui/button";
import { User, Users, Search, House } from "lucide-react";
import Link from "next/link";

const ChatTypeListSidebar = () => {
  return (
    <div className="h-full flex flex-col p-4 space-y-4 border-r">
      <Button size="icon" variant="outline" asChild>
        <Link href="/dashboard/messages">
          <House className="w-[1.2rem] h-[1.2rem]" />
        </Link>
      </Button>
      <Button size="icon" variant="outline" asChild>
        <Link href="/dashboard/messages/chats-search">
          <Search className="w-[1.2rem] h-[1.2rem]" />
        </Link>
      </Button>
      <Button size="icon" variant="outline" asChild>
        <Link href="/dashboard/messages/chats-direct">
          <User className="w-[1.2rem] h-[1.2rem]" />
        </Link>
      </Button>
      <Button size="icon" variant="outline" asChild>
        <Link href="/dashboard/messages/chats-group">
          <Users className="w-[1.2rem] h-[1.2rem]" />
        </Link>
      </Button>
    </div>
  );
};

export default ChatTypeListSidebar;
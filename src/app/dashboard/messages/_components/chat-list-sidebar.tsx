import Link from "next/link";
import { DirectChatType } from "../_types/chatsTypes";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import DefaultAvatar from "./default-avatar";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import { UserType } from "../_types/chatsTypes";

interface ChatListSidebarProps {
  chats: DirectChatType[];
}

const ChatListSidebar = ({ chats }: ChatListSidebarProps) => {
  const { user, isLoaded } = useUser();

  const renderChatUser = (chatUser: UserType) => (
    <div className="flex items-center gap-2 overflow-x-hidden">
      <div>
        {chatUser.image ? (
          <Image src={chatUser.image} alt={chatUser.email} width={40} height={40} />
        ) : (
          <DefaultAvatar />
        )}
      </div>
      <div className="flex flex-col">
        <span>{chatUser.email}</span>
        <span className="text-sm text-green-500">Online</span>
      </div>
    </div>
  );

  return (
    <div className="min-w-80 py- h-full border-r">
      <ScrollArea className="h-full">
        {chats.map((chat) => {
          const chatUser = chat.user1.id === Number(user?.id) ? chat.user2 : chat.user1;

          return (
            <Button
              key={chat.id}
              variant="ghost"
              asChild
              className="w-full py-4 flex justify-start rounded-none border-b"
            >
              <Link href={`/dashboard/messages/chats-direct/${chat.id}`} className="h-full">
                {isLoaded && user ? renderChatUser(chatUser) : <div>Loading...</div>}
              </Link>
            </Button>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default ChatListSidebar;

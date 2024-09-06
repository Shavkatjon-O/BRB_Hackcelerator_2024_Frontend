import Link from "next/link";
import { DirectChatType } from "../_types/chatsTypes";
import { Button } from "@/components/ui/button";
import DefaultAvatar from "./default-avatar";
import { Separator } from "@/components/ui/separator";
import useUser from "@/hooks/useUser";
import Image from "next/image";

interface ChatListSidebarProps {
  chats: DirectChatType[];
}

const ChatListSidebar = ({ chats }: ChatListSidebarProps) => {
  const { user, isLoaded } = useUser();

  const renderChatUser = (chatUser: { id: number; image?: string; email: string }) => (
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
    <div className="min-w-80 py-4 h-full border-r overflow-y-scroll">
      <div className="border-t">
        {chats.map((chat) => {
          const chatUser = chat.user1.id === Number(user?.id) ? chat.user2 : chat.user1;

          return (
            <>
              <Button key={chat.id} variant="ghost" asChild className="w-full py-10 flex justify-start rounded-none border-b">
                <Link href={`/dashboard/messages/chats-direct/${chat.id}`}>
                  {isLoaded && user ? renderChatUser(chatUser) : <div>Loading...</div>}
                </Link>
              </Button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ChatListSidebar;

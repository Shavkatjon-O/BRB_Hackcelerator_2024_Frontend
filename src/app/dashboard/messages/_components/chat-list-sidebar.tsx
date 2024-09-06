import Link from "next/link";
import { DirectChatType } from "../_types/messagesTypes";
import { Button } from "@/components/ui/button";
import DefaultAvatar from "./default-avatar";
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
      <div>{chatUser.email}</div>
    </div>
  );

  return (
    <div className="w-80 h-full p-4 border-r overflow-y-scroll">
      <div className="space-y-4">
        {chats.map((chat) => {
          const chatUser = chat.user1.id === Number(user?.id) ? chat.user2 : chat.user1;

          return (
            <Button key={chat.id} variant="outline" asChild className="w-full py-8 flex justify-start">
              <Link href={`/dashboard/messages/chats-direct/${chat.id}`}>
                {isLoaded && user ? renderChatUser(chatUser) : <div>Loading...</div>}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ChatListSidebar;
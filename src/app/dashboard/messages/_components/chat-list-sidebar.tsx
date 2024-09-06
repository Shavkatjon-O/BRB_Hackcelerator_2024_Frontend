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
  const { user, isLoaded, error } = useUser();
  
  return (
    <div className="w-80 h-full p-4 border-r overflow-y-scroll">
      <div className="space-y-4">
        {chats.map(chat => (
          <Button key={chat.id} variant="outline" asChild className="w-full py-8 flex justify-start">
            <Link href={`/dashboard/messages/chats-direct/${chat.id}`}>
              {
                isLoaded && user ? (
                  <div>
                      {
                        chat.user1.id === Number(user.id) ? (
                          <div className="flex items-center gap-2 overflow-x-hidden">
                            <div>
                              {
                                chat.user2.image ? (
                                  <Image src={chat.user2.image} alt={chat.user2.email} width={40} height={40} />
                                ) : (
                                  <DefaultAvatar />
                                )
                              }
                            </div>
                            <div>
                              {chat.user2.email}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 overflow-x-hidden">
                            <div>
                              {
                                chat.user1.image ? (
                                  <Image src={chat.user1.image} alt={chat.user1.email} width={40} height={40} />
                                ) : (
                                  <DefaultAvatar />
                                )
                              }
                            </div>
                            <div>
                              {chat.user1.email}
                            </div>
                          </div>
                        )
                      }
                  </div>
                ) : (
                  <div>Loading...</div>
                )
              }
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChatListSidebar;

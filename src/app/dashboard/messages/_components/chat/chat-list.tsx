import { Message, UserData } from "@/constants/data";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import ChatBottombar from "./chat-bottombar";
import { AnimatePresence, motion } from "framer-motion";
import { ChatBubbleAvatar, ChatBubbleMessage, ChatBubbleTimestamp, ChatBubble } from "../ui/chat/chat-bubble";
import { ChatMessageList } from "../ui/chat/chat-message-list";

import { DirectChatType, MessageType, UserType } from "../../_types/chatsTypes";
import useUser from "@/hooks/useUser";

interface ChatListProps {
  messages: MessageType[] | undefined;
  selectedUser: DirectChatType | null;
  sendMessage: (newMessage: MessageType) => void;
  isMobile: boolean;
}

const getMessageVariant = (messageName: string, selectedUserName: string): "sent" | "received" => 
  messageName !== selectedUserName ? "sent" : "received";

export function ChatList({ messages, selectedUser, sendMessage, isMobile }: ChatListProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isLoaded || !user) return null;
  if (!selectedUser) return null;

  return (
    <div className="w-full overflow-y-auto h-full flex flex-col">
      <ChatMessageList
        ref={messagesContainerRef}
      >
        <AnimatePresence>
          {messages?.map((message, index) => {
            let variant: "sent" | "received" | undefined;

            // variant = (
            //   selectedUser?.user1.id == user.id
            //     ? "sent"
            //     : "received"
            // )

            variant = getMessageVariant(user.email, message.user.email);

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                transition={{
                  opacity: { duration: 0.1 },
                  layout: {
                    type: "spring",
                    bounce: 0.3,
                    duration: index * 0.05 + 0.2,
                  },
                }}
                style={{ originX: 0.5, originY: 0.5 }}
                className="flex flex-col gap-2 p-4"
              >
                {selectedUser?.user1.id == user.id ? (
                  <ChatBubble variant={variant}>
                    <ChatBubbleAvatar src={
                      selectedUser?.user1.image ? selectedUser?.user1.image : "https://github.com/shadcn.png"
                    } />
                    <ChatBubbleMessage variant={variant}>
                      {message.text}
                      {message.created_at && (
                        <ChatBubbleTimestamp timestamp={message.created_at} />
                      )}
                    </ChatBubbleMessage>
                  </ChatBubble>
                ) : (
                  <ChatBubble variant={variant}>
                    <ChatBubbleAvatar src={
                      selectedUser?.user2.image ? selectedUser?.user2.image : "https://github.com/shadcn.png"
                    } />
                    <ChatBubbleMessage variant={variant}>
                      {message.text}
                      {message.created_at && (
                        <ChatBubbleTimestamp timestamp={message.created_at} />
                      )}
                    </ChatBubbleMessage>
                  </ChatBubble>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </ChatMessageList>
      {/* <ChatBottombar isMobile={isMobile} /> */}
    </div>
  );
}

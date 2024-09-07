"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  getDirectChat,
  getDirectChatMessageList,
  createDirectChatMessage,
} from "../../_services/chatsServices";
import useUser from "@/hooks/useUser";
import { DirectChatType, MessageType } from "../../_types/chatsTypes";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
  ChatBubble,
} from "../../_components/ui/chat-bubble";
import { ChatMessageList } from "../../_components/ui/chat-message-list";

const getMessageVariant = (messageEmail: string, currentUserEmail: string) =>
  messageEmail === currentUserEmail ? "sent" : "received";

const ChatPage = () => {
  const { id } = useParams();
  const chatID = Array.isArray(id) ? id[0] : id;
  const { user, isLoaded, error } = useUser();

  const [chat, setChat] = useState<DirectChatType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const fetchChatData = useCallback(async () => {
    if (!chatID || !user) return;

    try {
      const { data: directChat } = await getDirectChat(chatID);
      setChat(directChat);

      const { data: directChatMessageList } = await getDirectChatMessageList(
        chatID
      );
      setMessages(directChatMessageList);
    } catch (err) {
      console.error("Error fetching chat data", err);
    }
  }, [chatID, user]);

  useEffect(() => {
    fetchChatData();
  }, [fetchChatData]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setIsLoading(true);
    try {
      await createDirectChatMessage(chatID, newMessage);
      await fetchChatData();
      setNewMessage("");
    } catch (err) {
      console.error("Failed to send message", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;
  if (!user) return <div>User not found</div>;
  if (!chat) return <div>Chat not found</div>;

  return (
    <>
      <div className="w-full overflow-y-auto h-full flex flex-col">
        <ChatMessageList ref={messagesContainerRef}>
          <AnimatePresence>
            {messages.map((message, index) => {
              const variant = getMessageVariant(
                message.user.email,
                user.email
              );
              return (
                <motion.div
                  key={message.id}
                  layout
                  initial={{ opacity: 0, scale: 1, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1, y: 1 }}
                  transition={{
                    opacity: { duration: 0.1 },
                    layout: {
                      type: "spring",
                      bounce: 0.3,
                      duration: index * 0.05 + 0.2,
                    },
                  }}
                  className="flex flex-col gap-2 p-4"
                >
                  <ChatBubble variant={variant}>
                    <ChatBubbleAvatar
                      src={chat.partner?.image}
                      fallback={chat.partner?.email[0].toUpperCase()}
                    />
                    <ChatBubbleMessage variant={variant}>
                      {message.text}
                      {message.created_at && (
                        <ChatBubbleTimestamp timestamp={message.created_at} />
                      )}
                    </ChatBubbleMessage>
                  </ChatBubble>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </ChatMessageList>
      </div>
      <div className="flex fixed bottom-0">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-lg p-2"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </>
  );
};

export default ChatPage;

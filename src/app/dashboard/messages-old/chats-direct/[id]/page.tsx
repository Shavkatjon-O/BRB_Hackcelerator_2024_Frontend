"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
  ChatBubble,
} from "../../_components/ui/chat-bubble";
import { ChatMessageList } from "../../_components/ui/chat-message-list";
import { FileImage, Paperclip, PlusCircle, SendHorizontal } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EmojiPicker } from "../../_components/emoji-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChatInput } from "../../_components/ui/chat-input";
import ChatTopbar from "../../_components/ChatTop";
import useChatStore from './useChatStore';
import useUser from "@/hooks/useUser";
import { createDirectChatMessage } from "../../_services/chatsServices";

const BottombarIcons = [
  { icon: FileImage, label: "Image" },
  { icon: Paperclip, label: "Attach" },
];

const getMessageVariant = (messageEmail: string, currentUserEmail: string) =>
  messageEmail === currentUserEmail ? "sent" : "received";

const ChatPage = () => {
  const { id } = useParams();
  const chatID = Array.isArray(id) ? id[0] : id;
  const { user, isLoaded, error } = useUser();

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const {
    chat,
    messages,
    isLoading,
    hasMoreMessages,
    ws,
    fetchChatData,
    fetchMoreMessages,
    addMessage,
    setWs,
  } = useChatStore();
  const [message, setMessage] = React.useState("");

  // Fetch chat data when user and chatID are ready
  useEffect(() => {
    if (chatID && user) {
      fetchChatData(chatID, user);
    }
  }, [chatID, user, fetchChatData]);

  // WebSocket setup
  useEffect(() => {
    if (!chatID) return;

    const socket = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/chat/${chatID}/`.replace('//', '/'));
    setWs(socket);

    socket.onopen = () => console.log("WebSocket connection opened");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("message received", data);

      if (data.chat.id !== Number(chatID)) return;
      addMessage(data);
    };

    socket.onclose = (event) => console.error("WebSocket closed:", event);
    socket.onerror = (event) => console.error("WebSocket error observed:", event);

    return () => socket.close();
  }, [chatID, addMessage, setWs]);

  // Load more messages when user scrolls up
  const handleScroll = useCallback(() => {
    if (messagesContainerRef.current?.scrollTop === 0 && hasMoreMessages) {
      fetchMoreMessages(chatID, messages.length);
    }
  }, [fetchMoreMessages, chatID, messages.length, hasMoreMessages]);

  const handleSendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN && message.trim()) {
      const newMessage = { message: { chat, user, text: message } };
      ws.send(JSON.stringify(newMessage));

      createDirectChatMessage(String(chat?.id), newMessage.message.text);
      setMessage(""); // Clear input
      inputRef.current?.focus();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  if (!chat) return <div>Chat not found</div>;
  if (error) return <div>Error loading user data</div>;

  return (
    <div className="w-full overflow-y-auto h-full flex flex-col justify-between">
      <ChatTopbar selectedUser={chat} />

      {/* Chat messages displayed from bottom */}
      <ChatMessageList
        ref={messagesContainerRef}
        onScroll={handleScroll}
        style={{ display: "flex", flexDirection: "column-reverse" }}
      >
        <AnimatePresence>
          {messages.map((message, index) => {
            const variant = getMessageVariant(message.user.email, user.email);
            return (
              <motion.div
                key={message.id || index}
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
                    src={message.user.image || chat.partner?.image}
                    fallback={message.user.email[0].toUpperCase()}
                  />
                  <ChatBubbleMessage variant={variant}>
                    {message.text}
                    {message.created_at && (
                      <ChatBubbleTimestamp
                        timestamp={message.created_at}
                        className="text-xs text-slate-400"
                      />
                    )}
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </ChatMessageList>

      <div className="px-2 py-4 flex justify-between w-full items-center gap-2">
        <div className="flex">
          <Popover>
            <PopoverTrigger asChild>
              <Link
                href="#"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}
              >
                <PlusCircle size={22} className="text-muted-foreground" />
              </Link>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-full p-2">
              <div className="flex gap-2">
                {BottombarIcons.map((icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9")}
                  >
                    <icon.icon size={22} className="text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <AnimatePresence initial={false}>
          <motion.div
            key="input"
            className="w-full relative"
            layout
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              opacity: { duration: 0.05 },
              layout: { type: "spring", bounce: 0.15 },
            }}
          >
            <ChatInput
              value={message}
              ref={inputRef}
              onKeyDown={handleKeyPress}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className="rounded-lg"
            />
            <div className="absolute right-4 top-3">
              <EmojiPicker
                onChange={(value) => {
                  setMessage(message + value);
                  inputRef.current?.focus();
                }}
              />
            </div>
          </motion.div>

          <Button
            className="h-9 w-9 shrink-0"
            onClick={handleSendMessage}
            disabled={isLoading}
            variant="ghost"
            size="icon"
          >
            <SendHorizontal size={22} className="text-muted-foreground" />
          </Button>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatPage;

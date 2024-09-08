"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState, useCallback } from "react";
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

// import ChatBottombar from "../../_components/ChatBottom";

import {
  FileImage,
  Mic,
  Paperclip,
  PlusCircle,
  SendHorizontal,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EmojiPicker } from "../../_components/emoji-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChatInput } from "../../_components/ui/chat-input";
import { loggedInUserData } from "@/constants/data";

import ChatTopbar from "../../_components/ChatTop";

const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];



const getMessageVariant = (messageEmail: string, currentUserEmail: string) =>
  messageEmail === currentUserEmail ? "sent" : "received";

const ChatPage = () => {
  const { id } = useParams();
  const chatID = Array.isArray(id) ? id[0] : id;
  const { user, isLoaded, error } = useUser();

  const [chat, setChat] = useState<DirectChatType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("")
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage((prev) => prev + "\n");
    }
  };


  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const fetchChatData = useCallback(async () => {
    if (!chatID || !user) return;

    setIsLoading(true);
    try {
      const { data: directChat } = await getDirectChat(chatID);
      setChat(directChat);

      const { data: directChatMessageList } = await getDirectChatMessageList(chatID);
      setMessages(directChatMessageList);
    } catch (err) {
      console.error("Error fetching chat data", err);
    } finally {
      setIsLoading(false);
    }
  }, [chatID, user]);

  const ws = new WebSocket(`ws://localhost:8001/ws/chat/${chatID}/`);

  useEffect(() => {
    // console.log("ws", ws);  
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("message received", data.message);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    };

    return () => {
      ws.close();
    };
  }, [chatID]);

  useEffect(() => {
    fetchChatData();
  }, [fetchChatData]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  if (!isLoaded) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;
  if (!user) return <div>User not found</div>;
  if (!chat) return <div>Chat not found</div>;

  const sendMessage = (newMessage: MessageType) => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ message }));
      console.log("message sent", message);

    }

    console.log("newMessage", newMessage);
    setMessages([...messages, newMessage]);
    createDirectChatMessage(
      String(chat.id),
      newMessage.text,
    );
  };

  const handleThumbsUp = () => {
    const newMessage: MessageType = {
      chat: chat,
      user: user,
      text: "👍",
    };
    sendMessage(newMessage);
    setMessage("");
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: MessageType = {
        chat: chat,
        user: user,
        text: message,
      };
      sendMessage(newMessage);
      setMessage("");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className="w-full overflow-y-auto h-full flex flex-col justify-between">
      <ChatTopbar selectedUser={chat} />
      
      <ChatMessageList ref={messagesContainerRef}>
        <AnimatePresence>
          {messages.map((message, index) => {
            const variant = getMessageVariant(message.user.email, user.email);
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
                      <ChatBubbleTimestamp timestamp={message.created_at} className="text-xs text-slate-400" />
                    )}
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </ChatMessageList>
      {/* <ChatBottombar isMobile={false} chat={chat} /> */}


      {/* Input */}

      <div className="px-2 py-4 flex justify-between w-full items-center gap-2">
        <div className="flex">
          <Popover>
            <PopoverTrigger asChild>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                  "shrink-0",
                )}
              >
                <PlusCircle size={22} className="text-muted-foreground" />
              </Link>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-full p-2">
              {message.trim() ? (
                <div className="flex gap-2">
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "h-9 w-9",
                      "shrink-0",
                    )}
                  >
                    <Mic size={22} className="text-muted-foreground" />
                  </Link>
                  {BottombarIcons.map((icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "h-9 w-9",
                        "shrink-0",
                      )}
                    >
                      <icon.icon size={22} className="text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "h-9 w-9",
                    "shrink-0",
                  )}
                >
                  <Mic size={22} className="text-muted-foreground" />
                </Link>
              )}
            </PopoverContent>
          </Popover>
          {!message.trim() && (
            <div className="flex">
              {BottombarIcons.map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "h-9 w-9",
                    "shrink-0",
                  )}
                >
                  <icon.icon size={22} className="text-muted-foreground" />
                </Link>
              ))}
            </div>
          )}
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
              layout: {
                type: "spring",
                bounce: 0.15,
              },
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
            <div className="absolute right-4 top-3  ">
              <EmojiPicker
                onChange={(value) => {
                  setMessage(message + value);
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }}
              />
            </div>
          </motion.div>

          {message.trim() ? (
            <Button
              className="h-9 w-9 shrink-0"
              onClick={handleSend}
              disabled={isLoading}
              variant="ghost"
              size="icon"
            >
              <SendHorizontal size={22} className="text-muted-foreground" />
            </Button>
          ) : (
            <Button
              className="h-9 w-9 shrink-0"
              onClick={handleThumbsUp}
              disabled={isLoading}
              variant="ghost"
              size="icon"
            >
              <ThumbsUp size={22} className="text-muted-foreground" />
            </Button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ChatPage;

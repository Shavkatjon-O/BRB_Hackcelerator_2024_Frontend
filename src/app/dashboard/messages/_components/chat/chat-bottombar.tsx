import {
  FileImage,
  Mic,
  Paperclip,
  PlusCircle,
  SendHorizontal,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { EmojiPicker } from "../emoji-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChatInput } from "../ui/chat/chat-input";
import useChatStore from "../../_hooks/useChatStore";

import { DirectChatType, MessageType, UserType } from "../../_types/chatsTypes";
import useUser from "@/hooks/useUser";

interface ChatBottombarProps {
  isMobile: boolean;
  chat: DirectChatType | null;
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];

export default function ChatBottombar({
  isMobile,
  chat,
}: ChatBottombarProps) {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const setMessages = useChatStore((state) => state.setMessages);
  const hasInitialResponse = useChatStore((state) => state.hasInitialResponse);
  const setHasInitialResponse = useChatStore((state) => state.setHasInitialResponse);
  const [isLoading, setisLoading] = useState(false)

  const { user, isLoaded } = useUser();
  if (!isLoaded || !user) return null;
  const otherUser = chat?.user1.id=== user.id ? chat?.user2 : chat?.user1;
  if (!chat || !otherUser) return null;
  
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  
  const sendMessage = (newMessage: MessageType) => {
    useChatStore.setState((state) => ({
      messages: [...state.messages, newMessage],
    }));
  };
  
  const handleThumbsUp = () => {
    const newMessage: MessageType = {
      id: message.length + 1,
      text: "👍",
      user: user,
      chat: chat,
    };
    sendMessage(newMessage);
    setMessage("");
  };
  
  const handleSend = () => {
    if (message.trim()) {
      const newMessage: MessageType = {
        id: message.length + 1,
        text: message,
        user: user,
        chat: chat,
      };
      sendMessage(newMessage);
      setMessage("");
      
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };
  
  const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    if (!hasInitialResponse) {
      setisLoading(true);
      setTimeout(() => {
        setMessages((messages) => [
          ...messages.slice(0, messages.length - 1),
          {
            id: messages.length,
            text: `Hello ${user.email}, how can I help you today?`,
            user: otherUser,
            chat: chat,
            time: formattedTime
          }
        ]);
        setisLoading(false);
        setHasInitialResponse(true);
      }, 2500);
    }
  }, []);

  
  
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
  

  return (
    <div className="p-2 flex justify-between w-full items-center gap-2">
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-9 w-9",
                "shrink-0"
              )}
            >
              <PlusCircle size={22} className="text-muted-foreground" />
            </Link>
          </PopoverTrigger>
          <PopoverContent
            side="top"
            className="w-full p-2">
            {message.trim() || isMobile ? (
              <div className="flex gap-2">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "h-9 w-9",
                    "shrink-0"
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
                      "shrink-0"
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
                  "shrink-0"
                )}
              >
                <Mic size={22} className="text-muted-foreground" />
              </Link>
            )}
          </PopoverContent>
        </Popover>
        {!message.trim() && !isMobile && (
          <div className="flex">
            {BottombarIcons.map((icon, index) => (
              <Link
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9",
                  "shrink-0"
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
            className="rounded-full"
          />
          <div className="absolute right-4 bottom-2  ">
            <EmojiPicker onChange={(value) => {
              setMessage(message + value)
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }} />
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
  );
}

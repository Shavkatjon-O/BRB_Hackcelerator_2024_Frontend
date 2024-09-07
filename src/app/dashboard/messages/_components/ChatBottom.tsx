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
import { EmojiPicker } from "./emoji-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { MessageType, DirectChatType, UserType } from "../_types/chatsTypes";
import useUser from "@/hooks/useUser";
import { createDirectChatMessage } from "../_services/chatsServices";
import { useParams } from "next/navigation";

interface ChatBottombarProps {
  isMobile: boolean;
  chat: DirectChatType | null; // Allow chat to be null
}

const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];

export default function ChatBottombar({ isMobile, chat }: ChatBottombarProps) {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { user } = useUser();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !chat?.partner) return; // Added check for chat.partner

    setIsLoading(true);
    try {
      await createDirectChatMessage(String(chat.partner.id), message);
      setMessage("");
    } catch (err) {
      console.error("Failed to send message", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleThumbsUp = () => {
    if (!chat || !user) return; // Added check for chat and user

    const newMessage: MessageType = {
      chat: chat,
      user: user as UserType,
      text: "👍",
    };
    sendMessage(newMessage);
  };

  const handleSend = () => {
    if (message.trim() && chat && user) { // Added check for chat and user
      const newMessage: MessageType = {
        chat: chat,
        user: user as UserType,
        text: message,
      };
      sendMessage(newMessage);
    }
  };

  const sendMessage = (newMessage: MessageType) => {
    handleSendMessage();
    // /setMessages((prev) => [...prev, newMessage]);
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

  return (
    <div className="px-2 py-4 flex justify-between w-full items-center gap-2">
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <Link
              href="#"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9", "shrink-0")}
            >
              <PlusCircle size={22} className="text-muted-foreground" />
            </Link>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-full p-2">
            {message.trim() || isMobile ? (
              <div className="flex gap-2">
                <Link
                  href="#"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9", "shrink-0")}
                >
                  <Mic size={22} className="text-muted-foreground" />
                </Link>
                {BottombarIcons.map(({ icon: Icon }, index) => (
                  <Link
                    key={index}
                    href="#"
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9", "shrink-0")}
                  >
                    <Icon size={22} className="text-muted-foreground" />
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                href="#"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9", "shrink-0")}
              >
                <Mic size={22} className="text-muted-foreground" />
              </Link>
            )}
          </PopoverContent>
        </Popover>
        {!message.trim() && !isMobile && (
          <div className="flex">
            {BottombarIcons.map(({ icon: Icon }, index) => (
              <Link
                key={index}
                href="#"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-9 w-9", "shrink-0")}
              >
                <Icon size={22} className="text-muted-foreground" />
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
          <div className="absolute right-4 bottom-2">
            <EmojiPicker
              onChange={(value) => {
                setMessage((prev) => prev + value);
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
  );
}

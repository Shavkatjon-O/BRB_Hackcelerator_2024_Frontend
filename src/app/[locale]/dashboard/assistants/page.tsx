'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChatBubble, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import useChatStore from "@/hooks/useChatStore";
import { AnimatePresence, motion } from "framer-motion";
import { CopyIcon, CornerDownLeft, Mic, Paperclip, RefreshCcw, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CoreAPI from "@/lib/coreApi";

interface Message {
  id: number;
  avatar: string;
  name: string;
  role: "user" | "ai";
  message: string;
  isLoading?: boolean;
}

interface User {
  id: number;
  avatar: string;
  name: string;
  role?: "user" | "ai"; // Optional role
}

const ChatAiIcons = [
  {
    icon: CopyIcon,
    label: "Copy",
  },
  {
    icon: RefreshCcw,
    label: "Refresh",
  },
  {
    icon: Volume2,
    label: "Volume",
  },
];

export default function Page() {
  const messages = useChatStore((state) => state.chatBotMessages);
  const setMessages = useChatStore((state) => state.setchatBotMessages);
  const selectedUser: User = useChatStore((state) => state.selectedUser); // Ensure selectedUser is typed
  const input = useChatStore((state) => state.input);
  const setInput = useChatStore((state) => state.setInput);
  const handleInputChange = useChatStore((state) => state.handleInputChange);
  const hasInitialAIResponse = useChatStore((state) => state.hasInitialAIResponse);
  const setHasInitialAIResponse = useChatStore((state) => state.setHasInitialAIResponse);
  const [isLoading, setIsLoading] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const getMessageVariant = (role: "user" | "ai" | undefined) => (role === "ai" ? "received" : "sent");

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!input || isLoading) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      avatar: selectedUser.avatar,
      name: selectedUser.name,
      role: selectedUser.role || "user", // Ensure role is "user" if undefined
      message: input,
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput("");

    try {
      setIsLoading(true);
      const response = await CoreAPI.post("/bot/chat/", { question: input });
      const botMessage: Message = {
        id: messages.length + 2,
        avatar: "/chatbot.svg",
        name: "ChatBot",
        role: "ai",
        message: response.data,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (!hasInitialAIResponse && messages.length === 0) {
      setMessages(() => [
        {
          id: 1,
          avatar: "/chatbot.svg",
          name: "ChatBot",
          role: "ai",
          message: "How can I help you today?",
        },
      ]);

      setHasInitialAIResponse(true);
    }
  }, [hasInitialAIResponse, messages.length, setHasInitialAIResponse, setMessages]);

  return (
    <div className="h-full flex justify-center p-4 bg-slate-50 dark:bg-slate-950">
      <div className="w-[800px] relative flex h-full flex-col rounded-md bg-muted/20 dark:bg-muted/40 p-4 lg:col-span-2">
        <ChatMessageList ref={messagesContainerRef}>
          <AnimatePresence>
            {messages.map((message, index) => {
              const variant = getMessageVariant(message.role as "user" | "ai");
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2 p-4"
                >
                  <ChatBubble variant={variant}>
                    <Avatar>
                      <AvatarImage
                        src={message.avatar}
                        alt={`${message.name}'s avatar`}
                        className={message.role === "ai" ? "dark:invert" : ""}
                      />
                      <AvatarFallback>{message.name}</AvatarFallback>
                    </Avatar>
                    <ChatBubbleMessage isLoading={message.isLoading} variant={variant}>
                      {message.message}
                      {message.role === "ai" && (
                        <div className="flex items-center mt-1.5 gap-1">
                          {!message.isLoading &&
                            ChatAiIcons.map((icon, index) => {
                              const Icon = icon.icon;
                              return (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="icon"
                                  className="size-5"
                                  aria-label={icon.label}
                                >
                                  <Icon className="size-3" />
                                </Button>
                              );
                            })}
                        </div>
                      )}
                    </ChatBubbleMessage>
                  </ChatBubble>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </ChatMessageList>
        <div className="flex-1" />
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative rounded-lg border p-1 bg-background focus-within:ring-1 focus-within:ring-ring"
        >
          <ChatInput
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            value={input}
            placeholder="Type your message here..."
            className="min-h-12 resize-none bg-background border-none rounded-none p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0">
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mic className="size-4" />
              <span className="sr-only">Use Microphone</span>
            </Button>
            <Button
              disabled={!input || isLoading}
              type="submit"
              size="sm"
              className="ml-auto gap-1.5"
            >
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

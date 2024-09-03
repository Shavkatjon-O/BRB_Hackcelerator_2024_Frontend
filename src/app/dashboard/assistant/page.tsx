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
]

export default function Page() {
  const messages = useChatStore((state) => state.chatBotMessages);
  const setMessages = useChatStore((state) => state.setchatBotMessages);
  const selectedUser = useChatStore((state) => state.selectedUser);
  const input = useChatStore((state) => state.input);
  const setInput = useChatStore((state) => state.setInput);
  const handleInputChange = useChatStore((state) => state.handleInputChange);
  const hasInitialAIResponse = useChatStore((state) => state.hasInitialAIResponse);
  const setHasInitialAIResponse = useChatStore((state) => state.setHasInitialAIResponse);
  const [isLoading, setIsLoading] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const getMessageVariant = (role: "user" | "ai") => role === "ai" ? "received" : "sent";

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSendMessage(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  }

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    // Add user message to the state
    setMessages((messages) => [
      ...messages,
      {
        id: messages.length + 1,
        avatar: selectedUser.avatar,
        name: selectedUser.name,
        role: "user",
        message: input,
      } as Message
    ]);

    setInput("");
    formRef.current?.reset();

    try {
      setIsLoading(true);

      // Send message to the API
      const response = await CoreAPI.post("/bot/chat/", { question: input });
      const botMessage = response.data;

      // Add bot response to the state
      setMessages((messages) => [
        ...messages,
        {
          id: messages.length + 1,
          avatar: "/chatbot.svg",
          name: "ChatBot",
          role: "ai",
          message: botMessage,
        } as Message
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Set initial AI response if no messages are present
    if (!hasInitialAIResponse && messages.length === 0) {
      setIsLoading(true);
      setMessages((prevMessages) => [
        {
          id: 1,
          avatar: "/chatbot.svg",
          name: "ChatBot",
          role: "ai",
          message: "How can I help you today?",
          isLoading: true,
        } as Message
      ]);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.map((message) =>
            message.isLoading ? { ...message, isLoading: false } : message
          )
        ]);
        setIsLoading(false);
        setHasInitialAIResponse(true);
      }, 2000);
    }
  }, []);

  return (
    <div className="h-full flex justify-center p-4 bg-slate-50 dark:bg-slate-950">
      <div className="w-[800px] relative flex h-full flex-col rounded-md bg-muted/20 dark:bg-muted/40 p-4 lg:col-span-2">
        <ChatMessageList ref={messagesContainerRef}>
          {/* Chat messages */}
          <AnimatePresence>
            {messages.map((message, index) => {
              const variant = getMessageVariant(message.role as "user" | "ai");
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
                  <ChatBubble key={index} variant={variant}>
                    <Avatar>
                      <AvatarImage src={message.avatar} alt="Avatar" className={message.role === "ai" ? "dark:invert" : ""} />
                      <AvatarFallback>{message.name}</AvatarFallback>
                    </Avatar>
                    <ChatBubbleMessage isLoading={message.isLoading} variant={variant}>
                      {message.message}
                      {message.role === "ai" && (
                        <div className="flex items-center mt-1.5 gap-1">
                          {!message.isLoading && (
                            <>
                              {ChatAiIcons.map((icon, index) => {
                                const Icon = icon.icon;
                                return (
                                  <Button
                                    key={index}
                                    variant="outline"
                                    size="icon"
                                    className="size-5"
                                  >
                                    <Icon className="size-3" />
                                  </Button>
                                )
                              })}
                            </>
                          )}
                        </div>
                      )}
                    </ChatBubbleMessage>
                  </ChatBubble>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </ChatMessageList>
        <div className="flex-1" />
        <form
          ref={formRef}
          onSubmit={handleSendMessage}
          className="relative rounded-lg border p-1 bg-background focus-within:ring-1 focus-within:ring-ring"
        >
          <ChatInput
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
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

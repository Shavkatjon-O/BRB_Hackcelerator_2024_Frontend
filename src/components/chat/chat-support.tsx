"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Send } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "../ui/chat/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { AnimatePresence, motion } from "framer-motion";

import coreApi from "@/lib/coreApi";

const primaryCategories = [
  "Customer Relationship Managers",
  "HR Managers",
  "IT Support Staff",
  "Bank Tellers",
  "Compliance Officers",
  "Branch Managers",
  "Financial Analysts",
  "Loan Officers",
  "Marketing Managers",
  "Training and Development Officers",
];

const secondaryCategories = [
  "Task",
  "Duties",
  "Rules",
  "Performance Metrics",
  "Training Requirements",
];

const getAIResponse = async (message: string) => {
  const response = await coreApi.post("/assistants/chat-support/", { question: message });
  return response.data;
};

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: string;
}

const initialChatSupportMessages: Message[] = [
  {
    id: "1",
    content: "Hello! Welcome to the chat. How can I assist you today?",
    sender: "ai",
    timestamp: new Date().toLocaleTimeString(),
  },
  {
    id: "2",
    content: "Please select a Role by clicking one of the buttons below:",
    sender: "ai",
    timestamp: new Date().toLocaleTimeString(),
  },
];

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>(initialChatSupportMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPrimaryCategory, setSelectedPrimaryCategory] = useState<string | null>(null);
  const [selectedSecondaryCategory, setSelectedSecondaryCategory] = useState<string | null>(null);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    setTimeout(scrollToBottom, 100);
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: inputMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, userMessage]);
      setInputMessage("");
      setIsLoading(true);

      const messageWithTopics =
        selectedPrimaryCategory && selectedSecondaryCategory
          ? `Role - ${selectedPrimaryCategory}, Topic - ${selectedSecondaryCategory}: ${userMessage.content}`
          : userMessage.content;

      try {
        const aiResponseContent = await getAIResponse(messageWithTopics);
        const aiMessage: Message = {
          id: Date.now().toString(),
          content: aiResponseContent,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        const errorMessage: Message = {
          id: Date.now().toString(),
          content: "Sorry, there was an error processing your request.",
          sender: "ai",
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handlePrimaryCategoryClick = (category: string) => {
    setSelectedPrimaryCategory(category);
    const userMessage: Message = {
      id: Date.now().toString(),
      content: category,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    const aiMessage: Message = {
      id: Date.now().toString(),
      content: `You have selected the role: ${category}. Now, please choose a topic.`,
      sender: "ai",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
  };

  const handleSecondaryCategoryClick = (category: string) => {
    setSelectedSecondaryCategory(category);
    const userMessage: Message = {
      id: Date.now().toString(),
      content: category,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    const aiMessage: Message = {
      id: Date.now().toString(),
      content: `You have selected the topic: ${category}. Feel free to ask your questions.`,
      sender: "ai",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ExpandableChat
      icon={<Bot className="h-6 w-6" />}
      size="lg"
      position="bottom-right"
    >
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
        <p>Ask any question for our AI to answer</p>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList ref={messagesContainerRef} className="dark:bg-muted/40">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 1, y: 10, x: 0 }}
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
                className="flex flex-col"
              >
                <ChatBubble
                  key={message.id}
                  variant={message.sender === "user" ? "sent" : "received"}
                >
                  <ChatBubbleAvatar
                    src={message.sender === "user" ? "" : ""}
                    fallback={message.sender === "user" ? "US" : "🤖"}
                  />
                  <ChatBubbleMessage
                    variant={message.sender === "user" ? "sent" : "received"}
                  >
                    {message.content}
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            ))}

            {!selectedPrimaryCategory && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 1, y: 10, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                transition={{
                  opacity: { duration: 0.1 },
                  layout: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.2,
                  }}}
                className="flex flex-col mt-2"
              >
                <h2 className="text-lg font-semibold mb-2">Roles</h2>
                <div className="flex flex-wrap gap-2">
                  {primaryCategories.map((category, index) => (
                    <Button
                      key={index}
                      onClick={() => handlePrimaryCategoryClick(category)}
                      variant="outline"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}

            {selectedPrimaryCategory && !selectedSecondaryCategory && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 1, y: 10, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                transition={{
                  opacity: { duration: 0.1 },
                  layout: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.2,
                  }}}
                className="flex flex-col mt-2"
              >
                <h2 className="text-lg font-semibold mb-2">Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {secondaryCategories.map((category, index) => (
                    <Button
                      key={index}
                      onClick={() => handleSecondaryCategoryClick(category)}
                      variant="outline"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ChatMessageList>
      </ExpandableChatBody>
      {selectedSecondaryCategory && (
        <ExpandableChatFooter>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex relative gap-2"
          >
            <ChatInput
              onKeyDown={onKeyDown}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <Button
              disabled={!inputMessage.trim() || isLoading}
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 shrink-0"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </ExpandableChatFooter>
      )}
    </ExpandableChat>
  );
}

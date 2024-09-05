"use client";

import coreApi from "@/lib/coreApi";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const getMessages = async (chat_id: string) => {
  const response = await coreApi.get(`/chats/messages/${chat_id}/`);
  return response.data;
};

const sendMessage = async (text: string, chat_id: number) => {
  const response = await coreApi.post(`/chats/messages/create/`, {
    text: text,
    chat_id: chat_id,
  });
  return response.data;
};

const getDirectChatDetail = async (chat_id: string) => {
  const response = await coreApi.get(`/chats/direct/${chat_id}/`);
  return response.data;
};

interface MessageType {
  id: number;
  text: string;
  chat: number;
  user: number;
  created_at: string;
}

interface DirectChatType {
  id: number;
  users: number[];
}

const Page = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [chat, setChat] = useState<DirectChatType | null>(null);

  const { id } = useParams();

  const handleSubmit = async () => {
    if (newMessage.trim() === "" || !chat) return;

    setSubmitting(true);
    try {
      const data = await sendMessage(newMessage, chat.id);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const chatData = await getDirectChatDetail(id as string);
        setChat(chatData);
        const messagesData = await getMessages(id as string);
        setMessages(messagesData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchChatData();
  }, [id]);

  return (
    <div className="p-4">
      {loading && <p className="text-gray-500">Loading messages...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <>
          <ul className="mb-4 space-y-2">
            {messages.map((message, index) => (
              <li key={message.id ? message.id : `fallback-key-${index}`} className="p-2 rounded-lg border">
                {message.text}
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Input
              className="flex-grow"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;

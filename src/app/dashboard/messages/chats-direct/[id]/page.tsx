"use client";

import coreApi from "@/lib/coreApi";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const getMessages = async (chat_id: string) => {
  const response = await coreApi.get(`/chats/messages/${chat_id}/`);
  return response.data;
}

interface MessageType {
  id: number;
  text: string;
  chat: number;
  user: number;
  created_at: string;
}

const Page = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    getMessages(id as string).then((data) => {
      setMessages(data);
      setLoading(false);
    }).catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <p>Loading messages...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
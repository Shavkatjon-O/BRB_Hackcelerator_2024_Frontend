"use client";

import coreApi from "@/lib/coreApi";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface MessageType {
  id: number;
  text: string;
  chat: number;
  user: number;
  created_at: string;
}

const Page = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);  // Optional: Track loading state
  const [error, setError] = useState(null);      // Optional: Track error state

  useEffect(() => {
    coreApi.get(`/chats/messages/`)
      .then((response) => {
        console.log("Messages fetched:", response.data);
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          console.error("API response is not an array:", response.data);
          setMessages([]);  // Handle the case where the response is not an array
        }
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
        setError(err);  // Optional: Handle the error
      })
      .finally(() => setLoading(false));  // Optional: End loading state
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;  // Optional: Show a loading indicator
  }

  if (error) {
    return <div>Error loading messages</div>;  // Optional: Show an error message
  }

  if (!messages.length) {
    return <div>No messages found</div>;  // Handle empty array case
  }

  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map((message) => (
        <div key={message.id} className="w-full flex items-center space-x-4 border p-4">
          <span>{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Page;

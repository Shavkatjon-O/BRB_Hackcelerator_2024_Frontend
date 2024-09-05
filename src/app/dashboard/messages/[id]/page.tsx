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

interface ChatType {
  id: number;
  user: number;
  // Other chat-related fields
}

const getChat = async (user_id: string) => {
  try {
    const response = await coreApi.get(`/chats/${user_id}/`);
    return response.data;
  } catch (err) {
    console.error("Error fetching chat:", err);
    return null;
  }
};

const Page = () => {
  const { id } = useParams();
  const user_id = Array.isArray(id) ? id[0] : id;  // Handle both string and array cases
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState("");  // State for the new message input
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);  // Optional: Track form submission

  const [chat, setChat] = useState<ChatType | null>(null);

  useEffect(() => {
    if (user_id) {
      // Fetch the chat details based on user_id
      getChat(user_id).then((data) => {
        if (data) {
          setChat(data);
          console.log("Chat found:", data);
          // Fetch messages for the retrieved chat ID
          fetchMessages(data.id);
        } else {
          setError("Chat not found");
          setLoading(false);
        }
      });
    } else {
      setError("Invalid user ID");
      setLoading(false);
    }
  }, [user_id]);

  const fetchMessages = (chat_id: number) => {
    coreApi.get(`/chats/messages/`)
      .then((response) => {
        console.log("Messages fetched:", response.data);
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          console.error("API response is not an array:", response.data);
          setMessages([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if the message is empty or already submitting
    if (!newMessage.trim() || submitting || !chat) return;

    setSubmitting(true);  // Optional: Start submission state
    console.log(chat.id, newMessage);
    console.log(chat)
    coreApi.post(`/chats/messages/create/`, { text: newMessage, chat_id: chat.id })
      .then((response) => {
        console.log("Message created:", response.data);
        setMessages((prevMessages) => [...prevMessages, response.data]);  // Update messages list with new message
        setNewMessage("");  // Clear input after successful submission
      })
      .catch((err) => {
        console.error("Error creating message:", err);
        setError(err.message);
      })
      .finally(() => setSubmitting(false));  // Optional: End submission state
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading messages: {error}</div>;
  }

  if (!messages.length) {
    return <div>No messages found</div>;
  }

  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map((message) => (
        <div key={message.id} className="w-full flex items-center space-x-4 border p-4">
          <span>{message.text}</span>
        </div>
      ))}
      {/* Form for sending a new message */}
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={submitting}  // Disable the button when submitting
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Page;

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getDirectChat, getDirectChatMessageList, createDirectChatMessage } from "../../_services/messagesServices";

import { DirectChatType, MessageType } from "../../_types/messagesTypes";

import { useRouter } from "next/navigation";

import Link from "next/link";

const DirectChatPage = ({ params }: { params: { id: number } }) => {
  const [chat, setChat] = useState<DirectChatType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const chatResponse = await getDirectChat(params.id);
        setChat(chatResponse.data);
        
        const messagesResponse = await getDirectChatMessageList(params.id);
        setMessages(messagesResponse.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChatData();
  }, [params.id]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      await createDirectChatMessage(params.id, newMessage);
      setNewMessage("");
      // Fetch updated messages
      const messagesResponse = await getDirectChatMessageList(params.id);
      setMessages(messagesResponse.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 space-y-4">
      <div>
        <Button asChild>
          <Link href="/dashboard/messages">
            Back
          </Link>
        </Button>
      </div>
      {chat ? (
        <>
          <h2 className="text-xl font-bold">Chat with {chat.user1.email} and {chat.user2.email}</h2>

          <div className="space-y-2">
            {messages.map((message) => (
              <div key={message.id} className={`p-2 text-black ${message.user === chat.user1.id ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <span>{message.text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="Type a message"
            />
            <Button onClick={handleSendMessage} className="bg-blue-500 text-white">
              Send
            </Button>
          </div>
        </>
      ) : (
        <div>No chat found</div>
      )}
    </div>
  );
};

export default DirectChatPage;

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getDirectChat, getDirectChatMessageList, createDirectChatMessage } from "../../_services/messagesServices";
import { DirectChatType } from "../../_types/messagesTypes";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface MessageType {
  id: number;
  chat: number;
  user: number;
  text: string;
  created_at: string;
}

const DirectChatPage = ({ params }: { params: { id: number } }) => {
  const [chat, setChat] = useState<DirectChatType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [websocket, setWebSocket] = useState<WebSocket | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const chatResponse = await getDirectChat(params.id);
        setChat(chatResponse.data);

        const messagesResponse = await getDirectChatMessageList(params.id);
        setMessages(messagesResponse.data);

        // Initialize WebSocket connection
        const ws = new WebSocket(`ws://localhost:8001/ws/chat/${params.id}/`);
        setWebSocket(ws);

        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: data.id,
              chat: params.id,
              user: data.user,
              text: data.message,
              created_at: new Date().toISOString(),
            },
          ]);
        };

        ws.onclose = () => {
          console.log('WebSocket closed');
        };

        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
        };

        return () => {
          ws.close();
        };
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChatData();
  }, [params.id]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !websocket) return;

    try {
      await createDirectChatMessage(params.id, newMessage);

      websocket.send(
        JSON.stringify({
          message: newMessage,
          user: 1, // Replace with the actual user ID
        })
      );
      setNewMessage("");
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
          <Link href="/dashboard/messages">Back</Link>
        </Button>
      </div>
      {chat ? (
        <>
          <h2 className="text-xl font-bold">Chat with {chat.user1.email} and {chat.user2.email}</h2>

          <div className="space-y-2">
            {messages.map((message) => (
              <div
                key={message.created_at} // Use created_at for unique key
                className={`p-2 text-black ${
                  message.user === chat.user1.id ? 'bg-blue-100' : 'bg-gray-100'
                }`}
              >
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

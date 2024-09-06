"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  getDirectChat, 
  getDirectChatMessageList, 
  createDirectChatMessage 
} from "../../_services/messagesServices";
import useUser from "@/hooks/useUser";
import { 
  DirectChatType, 
  UserType 
} from "../../_types/messagesTypes";

interface MessageType {
  id: number;
  chat: DirectChatType;
  user: UserType;
  text: string;
  created_at: string;
}

const Page = () => {
  const { id } = useParams();
  const chatID = Array.isArray(id) ? id[0] : id;
  const { user, isLoaded, error } = useUser();

  const [chat, setChat] = useState<DirectChatType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id && user) {
      const fetchChatData = async () => {
        const directChat = await getDirectChat(chatID);
        setChat(directChat.data);
        const directChatMessageList = await getDirectChatMessageList(chatID);
        setMessages(directChatMessageList.data);
      };

      fetchChatData();
    }
  }, [id, user]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      setIsLoading(true);
      try {
        await createDirectChatMessage(chatID, newMessage);
        const updatedMessages = await getDirectChatMessageList(chatID);
        setMessages(updatedMessages.data);
        setNewMessage("");
      } catch (error) {
        console.error("Failed to send message", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;
  if (!user) return <div>User not found</div>;
  if (!chat) return <div>Chat not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chat with {chat.user1.id === Number(user.id) ? chat?.user2?.email : chat?.user1?.email}</h1>
      <div className="border rounded-lg p-4 mb-4 h-80 overflow-y-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 p-2 rounded-lg ${
              message.user.id === Number(user.id) ? "bg-blue-500 text-white self-end" : "bg-gray-700"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-lg p-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Page;

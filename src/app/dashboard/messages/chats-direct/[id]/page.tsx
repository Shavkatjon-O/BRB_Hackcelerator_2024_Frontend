"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  getDirectChat, 
  getDirectChatMessageList, 
  createDirectChatMessage 
} from "../../_services/messagesServices";
import useUser from "@/hooks/useUser";
import { DirectChatType, UserType } from "../../_types/messagesTypes";

interface MessageType {
  id: number;
  chat: DirectChatType;
  user: UserType;
  text: string;
  created_at: string;
}

const ChatPage = () => {
  const { id } = useParams();
  const chatID = Array.isArray(id) ? id[0] : id;
  const { user, isLoaded, error } = useUser();

  const [chat, setChat] = useState<DirectChatType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChatData = async () => {
      if (chatID && user) {
        try {
          const { data: directChat } = await getDirectChat(chatID);
          setChat(directChat);

          const { data: directChatMessageList } = await getDirectChatMessageList(chatID);
          setMessages(directChatMessageList);
        } catch (err) {
          console.error("Error fetching chat data", err);
        }
      }
    };

    fetchChatData();
  }, [chatID, user]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setIsLoading(true);
    try {
      await createDirectChatMessage(chatID, newMessage);

      const { data: updatedMessages } = await getDirectChatMessageList(chatID);
      setMessages(updatedMessages);
      setNewMessage("");
    } catch (err) {
      console.error("Failed to send message", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;
  if (!user) return <div>User not found</div>;
  if (!chat) return <div>Chat not found</div>;

  const chatPartner = chat.user1.id === user.id ? chat.user2 : chat.user1;

  return (
    <div className="p-4 size-full flex flex-col justify-between">
      <h1 className="text-xl font-bold mb-4">Chat with {chatPartner?.email}</h1>
      <div className="border rounded-lg p-4 mb-4 h-full overflow-y-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 p-2 rounded-lg max-w-xs ${
              message.user.id === user.id
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-700 text-white mr-auto"
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
          disabled={isLoading}
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

export default ChatPage;

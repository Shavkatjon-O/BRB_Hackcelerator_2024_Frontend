"use client";

// components/ChatRoom.tsx
import { useState, useEffect } from 'react';
import useWebSocket from '@/hooks/useWebsocket';
import { getMessages } from '@/services/chats';

interface ChatRoomProps {
  chatId: string;
  initialMessages: any[]; // Replace with actual type
}

const ChatRoom: React.FC<ChatRoomProps> = ({ chatId, initialMessages }) => {
  const { messages: wsMessages, sendMessage } = useWebSocket(chatId);
  const [messages, setMessages] = useState(initialMessages);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    // Update messages when WebSocket messages change
    setMessages((prevMessages) => [...prevMessages, ...wsMessages]);
  }, [wsMessages]);

  useEffect(() => {
    // Initialize state with initial messages
    setMessages(initialMessages);
  }, [initialMessages]);

  const handleSendMessage = () => {
    sendMessage(messageInput);
    setMessageInput('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;

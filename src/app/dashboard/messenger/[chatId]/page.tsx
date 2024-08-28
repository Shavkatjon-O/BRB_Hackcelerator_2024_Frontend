"use client";

// src/app/dashboard/messenger/[chatId]/page.tsx
import { useEffect, useState } from 'react';
import ChatRoom from '@/components/ChatRoom';
import { getMessages } from '@/services/chats'; // Adjust imports as necessary

interface ChatPageProps {
  params: {
    chatId: string;
  };
}

const ChatPage = ({ params }: ChatPageProps) => {
  const { chatId } = params;
  const [initialMessages, setInitialMessages] = useState<any[]>([]); // Replace with actual type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messages = await getMessages(chatId);
        setInitialMessages(messages);
      } catch (err) {
        setError('Failed to load messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [chatId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Chat Room: {chatId}</h1>
      <ChatRoom chatId={chatId} initialMessages={initialMessages} />
    </div>
  );
};

export default ChatPage;

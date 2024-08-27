"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import CoreAPI from '@/lib/coreApi';


import { Send, MessageCircle, Loader } from 'lucide-react';

const ChatBotPage = () => {
  const [messages, setMessages] = useState<{ text: string; fromUser: boolean }[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, fromUser: true }]);
    setInput('');
    setLoading(true);

    try {
      const response = await CoreAPI.post('/bot/chat/', { question: input });

      console.log('Response:', response.data);
      setMessages([...messages, { text: input, fromUser: true }, { text: response.data.answer, fromUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <Card key={index} className={`mb-2 p-2 ${msg.fromUser ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'}`}>
            {msg.text}
          </Card>
        ))}
      </div>
      <div className="flex items-center p-4 border-t">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow mr-2"
        />
        <Button onClick={handleSend} disabled={loading}>
          {loading ? <Loader className="animate-spin"/> : <Send />}
        </Button>
      </div>
    </div>
  );
};

export default ChatBotPage;

import { useEffect, useState } from 'react';

type WebSocketMessage = {
  message: string;
  sender: string;
};

const useWebSocket = (chatId: string) => {
  const [messages, setMessages] = useState<WebSocketMessage[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/ws/chat/${chatId}/`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, { message: data.message, sender: data.sender }]);
    };

    ws.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [chatId]);

  const sendMessage = (message: string) => {
    if (socket) {
      socket.send(JSON.stringify({ message }));
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;

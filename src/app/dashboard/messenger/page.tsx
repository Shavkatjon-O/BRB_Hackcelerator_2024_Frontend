"use client";


import { useEffect, useState } from 'react';

const Messenger = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        // const socket = new WebSocket('ws://localhost:8000/ws/messenger/');
        const socket = new WebSocket('ws://www.brb-titans.uz/ws/messenger/');
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        };

        setWs(socket);

        return () => {
            socket.close();
        };
    }, []);

    const sendMessage = () => {
        if (ws) {
            ws.send(JSON.stringify({ message }));
            setMessage('');
        }
    };

    return (
        <div>
            <h1>Messenger</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Messenger;

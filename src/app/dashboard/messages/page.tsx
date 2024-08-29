// "use client";

// import React, { useEffect, useState, useCallback } from 'react';
// import CoreAPI from '@/lib/coreApi';
// import { Avatar } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Send, MoreVertical } from 'lucide-react';

// interface User {
//   id: number;
//   username: string;
//   profile_picture: string;
//   status: string;
//   last_active: string;
// }

// interface Chat {
//   id: number;
//   name: string;
// }

// interface Message {
//   id: number;
//   user: string;
//   text: string;
// }

// const MessengerPage = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [chats, setChats] = useState<Chat[]>([]);
//   const [currentChat, setCurrentChat] = useState<Chat | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [ws, setWs] = useState<WebSocket | null>(null);

//   // Fetch users and chats from API
//   const fetchUsersAndChats = useCallback(async () => {
//     try {
//       // Fetch users
//       const userResponse = await CoreAPI.get('/chats/users/');
//       if (userResponse.status === 200) {
//         const userData = await userResponse.data.json();
//         console.log('Fetched users:', userData); // Debugging
//         setUsers(userData.users);
//       } else {
//         console.error('Failed to fetch users');
//       }

//       // Fetch chats
//       const chatResponse = await CoreAPI.get('/chats/');
//       if (chatResponse.status === 200) {
//         const chatData = await chatResponse.data.json();
//         console.log('Fetched chats:', chatData); // Debugging
//         setChats(chatData);
//       } else {
//         console.error('Failed to fetch chats');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchUsersAndChats();

//     // Initialize WebSocket connection
//     const chatId = currentChat?.id || 1; // Default chat ID if currentChat is not set
//     const socket = new WebSocket(`ws://localhost:8000/ws/chat/${chatId}/`);

//     socket.onopen = () => console.log('WebSocket connection opened');
//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       console.log('WebSocket message received:', data); // Debugging
//       if (data.message) {
//         setMessages(prevMessages => [...prevMessages, data]);
//       }
//     };
//     socket.onclose = () => console.log('WebSocket connection closed');
//     socket.onerror = (error) => console.error('WebSocket error:', error);

//     setWs(socket);

//     return () => {
//       if (ws) {
//         ws.close();
//       }
//     };
//   }, [fetchUsersAndChats, currentChat]);

//   const handleChatSelect = async (chatId: number) => {
//     setCurrentChat(chats.find(chat => chat.id === chatId) || null);
//     try {
//       const response = await fetch(`/chats/${chatId}/messages/`);
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Fetched messages:', data); // Debugging
//         setMessages(data);
//       } else {
//         console.error('Failed to fetch messages');
//       }
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   const handleSendMessage = (message: string) => {
//     if (ws) {
//       ws.send(JSON.stringify({ message, user_id: 1 })); // Update with current user id
//     }
//   };

//   return (
//     <div className="flex h-full">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-100 border-r">
//         <div className="p-4 border-b">
//           <h2 className="text-lg font-semibold">Chats</h2>
//         </div>
//         <ScrollArea className="p-4 space-y-2">
//           {/* Chat list items */}
//           {chats.length === 0 && <p>No chats available</p>}
//           {chats.map(chat => (
//             <div 
//               key={chat.id} 
//               onClick={() => handleChatSelect(chat.id)} 
//               className={`flex items-center p-2 rounded cursor-pointer hover:bg-gray-200 ${currentChat?.id === chat.id ? 'bg-gray-300' : ''}`}
//             >
//               <Avatar className="w-10 h-10 mr-4" />
//               <div className="flex-1">
//                 <h3 className="font-semibold">{chat.name}</h3>
//                 <p className="text-sm text-gray-600">Last message...</p>
//               </div>
//               <span className="text-xs text-gray-500">2m ago</span>
//             </div>
//           ))}
//         </ScrollArea>
//       </aside>

//       {/* Main Chat Section */}
//       <div className="flex-1 flex flex-col">
//         {/* Chat Header */}
//         <header className="p-4 border-b flex justify-between items-center">
//           <div className="flex items-center">
//             <Avatar className="w-10 h-10 mr-4" />
//             <div>
//               <h3 className="font-semibold">{currentChat?.name || 'Select a chat'}</h3>
//               <p className="text-sm text-gray-600">{currentChat ? 'Online' : ''}</p>
//             </div>
//           </div>
//           <Button variant="ghost" size="sm">
//             <MoreVertical className="w-5 h-5" />
//           </Button>
//         </header>

//         {/* Chat Messages */}
//         <ScrollArea className="flex-1 p-4 space-y-4">
//           {messages.length === 0 && <p>No messages available</p>}
//           {messages.map((msg, index) => (
//             <div key={index} className={`flex ${msg.user === 'me' ? 'justify-end' : ''} space-x-4`}>
//               {msg.user !== 'me' && <Avatar className="w-8 h-8" />}
//               <div className={`bg-gray-100 p-3 rounded-lg ${msg.user === 'me' ? 'bg-blue-500 text-white' : ''}`}>
//                 <p className="text-sm">{msg.text}</p>
//               </div>
//               {msg.user === 'me' && <Avatar className="w-8 h-8" />}
//             </div>
//           ))}
//         </ScrollArea>

//         {/* Message Input */}
//         <div className="p-4 border-t flex items-center">
//           <Input 
//             className="flex-1 mr-4" 
//             placeholder="Type a message..." 
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 handleSendMessage(e.currentTarget.value);
//                 e.currentTarget.value = '';
//               }
//             }} 
//           />
//           <Button variant="default" onClick={() => {
//             const input = document.querySelector('input');
//             if (input) {
//               handleSendMessage(input.value);
//               input.value = '';
//             }
//           }}>
//             <Send className="w-5 h-5" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MessengerPage;

import { cookies } from "next/headers";
import { ChatLayout } from "@/components/chat/chat-layout";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="h-full">
      <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
}

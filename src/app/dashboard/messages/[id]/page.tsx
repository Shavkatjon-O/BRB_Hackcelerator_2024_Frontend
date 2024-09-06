// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { Button } from "@/components/ui/button";
// import coreApi from "@/lib/coreApi";

// import { useParams } from "next/navigation";

// const createDirectChat = async (userId: string) => {
//   const response = await coreApi.post(`/chats/direct/create/`, { users: [userId] });
//   return response.data;
// }

// const sendMessage = async (chatId: number, message: string) => {
//   await coreApi.post(`/chats/messages/create/`, { chat: chatId, text: message });
// }

// const Page = () => {
//   const { id } = useParams();
//   const [chatId, setChatId] = useState<number | null>(null);
//   const [message, setMessage] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const createChat = async () => {
//       try {
//         const chat = await createDirectChat(id as string);
//         setChatId(chat.id);
//       } catch (error) {
//         setError("Error creating chat.");
//         console.error("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       createChat();
//     }
//   }, [id]);

//   const handleSendMessage = async () => {
//     if (chatId && message.trim()) {
//       try {
//         await sendMessage(chatId, message);
//         setMessage("");  // Clear the message input
//       } catch (error) {
//         setError("Error sending message.");
//         console.error("Error:", error);
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message"
//         className="border p-2"
//       />
//       <Button onClick={handleSendMessage}>Send</Button>
//     </div>
//   );
// };

// export default Page;

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";

// import { useParams } from "next/navigation";

// import { getUsers, createDirectChat } from "../_services/messagesServices";
// import useUser from "@/hooks/useUser";
// import { UserType, MessageType } from "../_types/messagesTypes";

// import Link from "next/link";

// const Page = () => {
//   const { id } = useParams();
//   const [chatId, setChatId] = useState<number | null>(null);
//   const [message, setMessage] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const { user } = useUser();

//   useEffect(() => {
//     const createChat = async () => {
//       try {
//         const chat = await createDirectChat(id, );
//         setChatId(chat.id);
//       } catch (error) {
//         setError("Error creating chat.");
//         console.error("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       createChat();
//     }
//   }, [id]);

//   const handleSendMessage = async () => {
//     if (chatId && message.trim()) {
//       try {
//         await sendMessage(chatId, message);
//         setMessage("");  // Clear the message input
//       } catch (error) {
//         setError("Error sending message.");
//         console.error("Error:", error);
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message"
//         className="border p-2"
//       />
//       <Button onClick={handleSendMessage}>Send</Button>
//     </div>
//   );

// };

// export default Page;

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

import { DirectChatType } from "../_types/messagesTypes";

import { createDirectChat, createDirectChatMessage } from "../_services/messagesServices";
import useUser from "@/hooks/useUser";

const Page = () => {
  const { id } = useParams();
  const [chatId, setChatId] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();

  useEffect(() => {
    const createChat = async () => {
      try {
        if (id && user) {
          const chat = await createDirectChat(user.id, id as string);
          setChatId(chat.id);
        }
      } catch (error) {
        setError("Error creating chat.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      createChat();
    }
  }, [id, user]);

  const handleSendMessage = async () => {
    if (chatId && message.trim()) {
      try {
        await createDirectChatMessage(chatId, message);
        setMessage("");  // Clear the message input
      } catch (error) {
        setError("Error sending message.");
        console.error("Error:", error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        className="border p-2 w-full mb-2"
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </div>
  );
};

export default Page;

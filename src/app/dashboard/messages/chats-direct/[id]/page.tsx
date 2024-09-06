"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  getDirectChat, 
  getDirectChatMessageList, 
  createDirectChatMessage 
} from "../../_services/messagesServices";
import useUser from "@/hooks/useUser";


const Page = () => {
  const { id } = useParams();
  const { user, isLoaded, error } = useUser();
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Page;
"use client";

import { useEffect, useState } from "react";
import { directChatListGet } from "../_services/chatsServices";
import { DirectChatType } from "../_types/chatsTypes";

const useChatList = () => {
  const [chats, setChats] = useState<DirectChatType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    directChatListGet().then((response) => {
      setChats(response);
      setIsLoaded(true);
    }).catch((error) => {
      setError(error.message);
    });
  }, []);

  return { chats, isLoaded, error };
}

export default useChatList;
"use client";
import useChatList from "../_hooks/useChatList";
import ChatList from "../_components/ChatList";

const Page = () => {

  const { chats, isChatsLoaded, error } = useChatList();


  return (
    <ChatList chats={chats} isCollapsed={false} />
  );

}

export default Page;
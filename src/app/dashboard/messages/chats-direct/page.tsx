"use client";
import useChatList from "../_hooks/useChatList";
import ChatList from "../_components/ChatList";

const Page = () => {

  const { chats, isChatsLoaded, error } = useChatList();

  if (!isChatsLoaded) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ChatList chats={chats} isCollapsed={false} />
  );

}

export default Page;
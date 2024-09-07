import useChatList from "../../_hooks/useChatList";

const ChatList = () => {
  const { chats, isLoaded, error } = useChatList();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id}>
          {chat.user1.email} - {chat.user2.email}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
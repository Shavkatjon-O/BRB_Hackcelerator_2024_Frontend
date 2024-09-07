import ChatList from "../_components/chat/chat-list-direct";

const Page = () => {
  return (
    <div>
      <h1>Group Chats</h1>
      <ChatList isCollapsed={true} />
    </div>
  );
}

export default Page;
import ChatSupport from "./components/chat/chat-support";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="" >
      <ChatSupport />
      {children}
    </div>
  );
}

export default Layout;
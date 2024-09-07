import { cookies } from "next/headers";
import { ChatLayout } from "../_components/ChatLayout";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <ChatLayout 
      defaultLayout={defaultLayout} 
      navCollapsedSize={8}
      type="direct"
    >
      {children}
    </ChatLayout>
  );
};

export default Layout;
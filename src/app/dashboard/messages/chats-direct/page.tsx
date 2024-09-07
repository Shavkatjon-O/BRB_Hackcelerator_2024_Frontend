import { cookies } from "next/headers";
import { ChatLayout } from "../_components/ChatLayout";

const Page = () => {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <ChatLayout 
      defaultLayout={defaultLayout} 
      navCollapsedSize={8}
      type="direct"
    >
      <div className="size-full flex justify-center items-center">
        <h1>Select Chat</h1>
      </div>
    </ChatLayout>
  );
};

export default Page;
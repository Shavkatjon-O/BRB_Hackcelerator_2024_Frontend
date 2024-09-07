import { cookies } from "next/headers";
import { ChatLayout } from "../_components/ChatLayout";

const Page = () => {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8}>
      <div className="flex justify-center items-center size-full">
        <h1>Select Chat to start Messaging</h1>
      </div>
    </ChatLayout>
  );
};

export default Page;
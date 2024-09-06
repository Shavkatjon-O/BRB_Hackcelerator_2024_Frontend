import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import ChatSidebar from './_components/chat-sidebar';

const Layout = ({ children }: { children: React.ReactNode} ) => {
  return (
    <div className="size-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={8} maxSize={32}>
          <ChatSidebar />
        </ResizablePanel>

        <ResizableHandle withHandle/>

        <ResizablePanel>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Layout;
import React from 'react'
import ChatTypeSidebar from './_components/chat-type-sidebar';

const Layout = ({ children }: { children: React.ReactNode} ) => {
  return (
    <div className="flex h-full">
      <ChatTypeSidebar />
      {children}
    </div>
  );
};

export default Layout;
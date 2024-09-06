import React from 'react'
import ChatTypeListSidebar from './_components/chat-type-list-sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="size-full flex">
      <ChatTypeListSidebar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;

import React from 'react'
import ChatSidebar from './_components/ChatSidebar';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="size-full flex">
      <ChatSidebar />
      <div className='size-full'>
        {children}
      </div>
    </div>
  );
};

export default Layout;

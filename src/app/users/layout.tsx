import React from 'react';
import LoginHeaderSection from './_components/header';
import LoginFooterSection from './_components/footer';

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <LoginHeaderSection />
      <main className="flex-grow flex items-center justify-center p-6 bg-gray-50">
        {children}
      </main>
      <LoginFooterSection />
    </div>
  );
};

export default UsersLayout;

import Sidebar from './_components/sidebar';
import Header from './_components/header';

import { ClerkProvider } from '@clerk/nextjs';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClerkProvider>
        <div>
          <Header />
          <div className="flex w-full pt-16 h-screen">
            <Sidebar />
            <main className='p-4'>{children}</main>
          </div>
        </div>
      </ClerkProvider>
    </>
  );
}

export default DashboardLayout;
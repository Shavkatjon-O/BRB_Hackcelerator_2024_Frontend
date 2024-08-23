import Sidebar from './_components/sidebar';
import Header from './_components/header';

import StreamVideoProvider from "@/providers/StreamVideoClient";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <div className="flex w-full pt-16 h-screen">
          <Sidebar />
          <StreamVideoProvider>
          <main className='p-4'>{children}</main>
          </StreamVideoProvider>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

import StreamVideoProvider from "@/providers/StreamVideoClient";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StreamVideoProvider>
        <div>
          <Header />
          <div className="flex w-full pt-16 h-screen">
            <Sidebar />
            <main className='p-4 w-full overflow-y-scroll'>{children}</main>
          </div>
        </div>
      </StreamVideoProvider>
    </>
  );
}

export default DashboardLayout;
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

import StreamVideoProvider from "@/providers/StreamVideoClient";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <div className="flex w-full pt-16 h-screen">
          <Sidebar />
          <main className='p-4 w-full overflow-y-scroll'>{children}</main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
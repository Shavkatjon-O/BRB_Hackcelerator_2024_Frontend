"use client";

import Header from "./_components/Header"; // eslint-disable-next-line
import Sidebar from "./_components/Sidebar"; // eslint-disable-next-line
import { SidebarProvider } from "@/providers/sidebar-provider";
import useUser from "@/hooks/useUser";
import Loader from "./_components/Loader";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return (
      <div className="h-screen">
        <Loader />
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar currentUser={user} />
        <div className="flex flex-col flex-1">
          <Header currentUser={user} />
          <main className="flex-1 overflow-y-scroll dark:bg-slate-900 bg-slate-100">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
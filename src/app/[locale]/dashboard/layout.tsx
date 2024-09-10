import Sidebar from "./_components/sidebar";
import Header from "./_components/header";
import { SidebarProvider } from "@/providers/sidebar-provider";
import { unstable_setRequestLocale } from "next-intl/server";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const DashboardLayout = ({ children, params }: DashboardLayoutProps) => {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <SidebarProvider>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-1 overflow-y-scroll dark:bg-slate-900 bg-slate-50">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
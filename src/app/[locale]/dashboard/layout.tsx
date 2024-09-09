import Sidebar from "./_components/sidebar";
import Header from "./_components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 overflow-y-scroll dark:bg-slate-900 bg-slate-100">{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
import Sidebar from "./_components/sidebar";
import Header from "./_components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
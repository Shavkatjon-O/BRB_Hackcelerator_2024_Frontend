import Sidebar from "./_components/sidebar";
import Header from "./_components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Sidebar />
    </>
  );
};

export default DashboardLayout;
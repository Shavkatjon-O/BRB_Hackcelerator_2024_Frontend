import Sidebar from './_components/sidebar';
import Header from './_components/header';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <div className="w-full">
          <Sidebar />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
import Sidebar from './_components/sidebar-old';
import Header from './_components/header-old';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <div className="flex w-full pt-16 h-screen">
          <Sidebar />
          <main className='p-4'>{children}</main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
import Sidebar from './_components/sidebar';
import Header from './_components/header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <div className="flex w-full pt-20 h-screen">
          <Sidebar />
          <main className='p-4'>{children}</main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';


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
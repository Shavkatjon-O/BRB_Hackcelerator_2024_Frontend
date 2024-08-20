import Header from './_components/header';
import Footer from './_components/footer';

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6 bg-gray-50">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UsersLayout;

import Header from "./_components/Header";
import Footer from "./_components/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-slate-100 dark:bg-slate-950">
        <Header />
          <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;

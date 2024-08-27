import Header from "./_components/Header";
import Footer from "../_components/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex justify-center items-center">
        {children}
      </div>
      <Footer />
        </main>
    </>
  );
};

export default HomeLayout;

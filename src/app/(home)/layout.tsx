import Header from '../(auth)/_components/Header';
import Footer from '../(auth)/_components/Footer';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;

import Header from './_components/header';
import Footer from './_components/footer';

const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default HomeLayout;

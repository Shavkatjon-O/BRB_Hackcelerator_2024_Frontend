import HeaderSection from './_components/HeaderSection';
import FooterSection from './_components/FooterSection';

const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <HeaderSection />
    <main>{children}</main>
    <FooterSection />
  </>
);

export default HomeLayout;

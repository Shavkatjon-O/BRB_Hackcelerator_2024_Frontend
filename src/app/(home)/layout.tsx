import HeaderSection from './_components/HeaderSection';
import FooterSection from './_components/FooterSection';

const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <main>{children}</main>
  </>
);

export default HomeLayout;

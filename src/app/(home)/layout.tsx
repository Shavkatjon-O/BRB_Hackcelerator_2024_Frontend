import Header from './_components/header';
import Footer from './_components/footer';

import { ClerkProvider } from "@clerk/nextjs";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClerkProvider>
      <Header />
      <main className='h-screen flex justify-center items-center pt-16'>{children}</main>
      <Footer />
      </ClerkProvider>
    </>
  );
};

export default HomeLayout;

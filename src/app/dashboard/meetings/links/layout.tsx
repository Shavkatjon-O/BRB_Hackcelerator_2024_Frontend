import { ReactNode } from "react";

import Header from "@/app/dashboard/_components/header";
import Sidebar from "@/app/dashboard/_components/sideBar";


const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
   return (
      <main className="relative">
         <Header />
         <div className="flex">
            <Sidebar />

            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
               <div className="w-full">{children}</div>
            </section>
         </div>
      </main>
   );
};

export default RootLayout;

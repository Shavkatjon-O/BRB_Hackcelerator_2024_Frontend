import { ReactNode } from "react";

import StreamVideoProvider from "@/providers/StreamVideoClient";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
   return (
      <main className="bg-gray-800">
         <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
   );
};

export default RootLayout;

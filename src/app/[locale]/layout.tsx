import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import "@/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRB Titans - The best place for your banking needs.",
  description: "BRB Titans - The best place for your banking needs.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { 
    locale: string 
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={cn("min-h-screen", inter.className)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
              <main>{children}</main>
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

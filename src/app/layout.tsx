import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import StreamVideoProvider from "@/providers/StreamVideoClient";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRB Titans - The best place for your banking needs.",
  description: "BRB Titans - The best place for your banking needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen", inter.className)}>
        <StreamVideoProvider><main>{children}</main></StreamVideoProvider>
        <Toaster />
      </body>
    </html>
  );
}
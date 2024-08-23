import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <head>
      <title>BRB Titans - The best place for your banking needs.</title>
      <meta name="description" content="BRB Titans - The best place for your banking needs." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
    </head>
    <body className={cn("min-h-[100dvh]")}>
      {children}
    </body>
  </html>
);

export default RootLayout;

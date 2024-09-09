"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [activePage, setActivePage] = useState<string>('/dashboard');

  return (
    <SidebarContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </SidebarContext.Provider>
  );
};

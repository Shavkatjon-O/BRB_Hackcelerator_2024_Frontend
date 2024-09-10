'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronFirst,
  ChevronLast,
  CreditCard,
  ArrowLeftRight,
  BadgeDollarSign,
  Upload,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSidebar } from '@/providers/sidebar-provider';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

import { defaultLinks } from '../_constants/sidebarLinks';

import { UserProfileType } from '@/types/authTypes';

const bankTellerLinks = [
  { href: '/dashboard/cards', label: 'Cards', icon: CreditCard },
  { href: '/dashboard/transactions', label: 'Transactions', icon: ArrowLeftRight },
  { href: '/dashboard/payments', label: 'Payments', icon: BadgeDollarSign },
  { href: '/dashboard/upload', label: 'Upload', icon: Upload },
];

const Sidebar = ({ currentUser }: { currentUser: UserProfileType }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { activePage, setActivePage } = useSidebar();

  const getLinksForUserType = () => {
    if (currentUser?.user_type === 'BANK_TELLER') {
      return {
        General: [...defaultLinks.General],
        Menu: [...bankTellerLinks],
        Other: [...defaultLinks.Other],
      };
    }
    return defaultLinks;
  };

  const links = getLinksForUserType();

  return (
    <TooltipProvider delayDuration={50}>
      <aside
        className={`h-screen hidden sm:block border-r dark:border-r-slate-700 transition-all duration-300 linear shadow-lg z-50 bg-white dark:bg-slate-800 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="h-full flex flex-col justify-between shadow-sm">
          <div className="p-4 h-16 border-b dark:border-b-slate-700 flex justify-between items-center">
            <Link href="/dashboard" className={`flex items-center font-bold ${isOpen ? 'block' : 'hidden'}`}>
              <Image
                width={32}
                height={32}
                src="/brb-titans-logo.jpg"
                className="w-10 h-10 rounded-lg"
                alt="BRB Titans Logo"
                priority
              />
              <span className="ml-2 whitespace-nowrap">BRB Titans</span>
            </Link>
            <Button variant="ghost" className="w-12 h-12 p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <ChevronFirst /> : <ChevronLast />}
            </Button>
          </div>

          <ScrollArea className="flex-grow">
            <nav className="flex flex-col space-y-2 p-4">
              {Object.entries(links).map(([title, links]) => (
                <div key={title} className="space-y-2">
                  {isOpen ? (
                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-300">{title}</h3>
                  ) : (
                    <Separator className="my-2" />
                  )}
                  {links.map(({ href, label, icon: Icon }) => (
                    <div key={href}>
                      {isOpen ? (
                        <Button
                          asChild
                          variant={activePage === href ? 'default' : 'ghost'}
                          className={`w-full py-2 px-3 flex items-center ${cn(
                            'justify-start',
                            activePage !== href ? 'text-slate-500 dark:text-slate-300' : ''
                          )}`}
                        >
                          <Link
                            href={href}
                            className="flex items-center space-x-2 w-full"
                            onClick={() => setActivePage(href)}
                          >
                            <Icon size={24} className="h-5 w-5" />
                            <span className="ml-2">{label}</span>
                          </Link>
                        </Button>
                      ) : (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              variant={activePage === href ? 'default' : 'ghost'}
                              className={`w-full py-2 px-3 flex items-center ${cn(
                                'justify-center',
                                activePage !== href ? 'text-slate-500 dark:text-slate-300' : ''
                              )}`}
                            >
                              <Link
                                href={href}
                                className="flex items-center space-x-2 w-full"
                                onClick={() => setActivePage(href)}
                              >
                                <Icon size={24} className="h-5 w-5" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side='right' className='ml-4'>
                            <p>{label}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </nav>
          </ScrollArea>

          <div
            className={`p-4 px-5 h-16 flex items-center ${
              isOpen ? 'justify-start' : 'justify-center'
            } border-t dark:border-t-slate-700 shadow-sm overflow-hidden`}
          >
            {currentUser && (
              <Link href="/dashboard/profile" className={`flex items-center ${isOpen ? '' : 'justify-center'}`}>
                <Avatar className="w-10 h-10">
                  <AvatarImage src={currentUser.image} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className={`text-sm ml-2 ${isOpen ? 'block' : 'hidden'}`}>{currentUser.email}</span>
              </Link>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
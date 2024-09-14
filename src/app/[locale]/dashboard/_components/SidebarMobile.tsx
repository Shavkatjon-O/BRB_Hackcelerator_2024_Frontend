// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//   ChevronFirst,
//   ChevronLast,
//   CreditCard,
//   BadgeDollarSign,
//   Users,
//   House,
//   LibraryBig,
//   HandCoins,
//   CirclePercent,
//   Headset,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { useSidebar } from '@/providers/sidebar-provider';
// import { cn } from '@/lib/utils';
// import { Separator } from '@/components/ui/separator';
// import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
// import { defaultLinks } from '../_constants/sidebarLinks';

// import {
//   AlignJustify,
// } from 'lucide-react';

// import { UserProfileType } from '@/types/authTypes';

// const mainLinks = [
//   { href: '/dashboard', label: 'Home', icon: House },
// ];

// const bankTellerLinks = [
//   { href: '/dashboard/cards', label: 'Cards', icon: CreditCard },
//   { href: '/dashboard/payments', label: 'Payments', icon: BadgeDollarSign },
//   { href: '/dashboard/clients', label: 'Clients', icon: Users },
// ];

// const loanManagerLinks = [
//   { href: '/dashboard/borrowers', label: 'Borrowers', icon: HandCoins },
//   { href: '/dashboard/applications', label: 'Applications', icon: LibraryBig },
//   { href: '/dashboard/payments', label: 'Payments', icon: BadgeDollarSign },
//   { href: '/dashboard/loans', label: 'Loans', icon: CirclePercent },
//   { href: '/dashboard/telephony', label: 'AI Telephony', icon: Headset },
//   { href: '/dashboard/clients', label: 'Clients', icon: Users },
// ];

// const Sidebar = ({ currentUser }: { currentUser: UserProfileType }) => {
//   const { activePage, setActivePage } = useSidebar();
  
//   const getLinksForUserType = () => {
//     const userTypeLinks = currentUser?.user_type === 'LOAN_MANAGER' ? loanManagerLinks : bankTellerLinks || [];

//     return {
//       Dashboard: [...mainLinks],
//       Menu: [...userTypeLinks],
//       General: [...defaultLinks.General],
//       Other: [...defaultLinks.Other],
//     };
//   };

//   const links = getLinksForUserType();

//   return (
//     <TooltipProvider delayDuration={50}>
//       <Sheet>
//         <SheetTrigger asChild>
//           <Button variant="ghost">
//             <AlignJustify />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="left" className='p-0'>
//           <SheetHeader>
//           </SheetHeader>

//           <div className="h-full flex flex-col justify-between shadow-sm">
//             <div className="p-4 h-16 border-b dark:border-b-slate-700 flex justify-between items-center">
//               <Link href="/dashboard" className="flex items-center font-bold">
//                 <Image
//                   width={32}
//                   height={32}
//                   src="/brb-titans-logo.jpg"
//                   className="w-10 h-10 rounded-lg"
//                   alt="BRB Titans Logo"
//                   priority
//                 />
//                 <span className="ml-2 whitespace-nowrap">BRB Titans</span>
//               </Link>
//             </div>

//             <ScrollArea className="flex-grow">
//               <nav className="flex flex-col px-4">
//                 {Object.entries(links).map(([title, links]) => (
//                   <div key={title} className="space-y-2">
//                     <h3 className="text-sm my-4 font-semibold text-slate-600 dark:text-slate-300">{title}</h3>
//                     {links.map(({ href, label, icon: Icon }) => (
//                       <div key={href}>
//                         <Button
//                           asChild
//                           variant={activePage === href ? 'default' : 'ghost'}
//                           className={`w-full py-2 px-3 flex items-center dark:hover:bg-slate-700 ${cn(
//                             'justify-start',
//                             activePage !== href ? 'text-slate-500 dark:text-slate-300' : ''
//                           )}`}
//                         >
//                           <Link
//                             href={href}
//                             className="flex items-center space-x-2 w-full"
//                             onClick={() => setActivePage(href)}
//                           >
//                             <Icon size={24} className="h-5 w-5" />
//                             <span className="ml-2">{label}</span>
//                           </Link>
//                         </Button>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//                 <Separator className="my-4 dark:bg-slate-600" />
//               </nav>
//             </ScrollArea>

//             <div className="p-4 px-5 h-16 flex items-center justify-start border-t dark:border-t-slate-700 shadow-sm overflow-hidden">
//               {currentUser && (
//                 <Link href="/dashboard/profile" className="flex items-center">
//                   <Avatar className="w-10 h-10">
//                     <AvatarImage src={currentUser.image} />
//                     <AvatarFallback>CN</AvatarFallback>
//                   </Avatar>
//                   <span className="text-sm ml-2">{currentUser.email}</span>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </SheetContent>
//       </Sheet>
//     </TooltipProvider>
//   );
// };

// export default Sidebar;

const Comp = () => {
  return <div></div>
}

export default Comp;
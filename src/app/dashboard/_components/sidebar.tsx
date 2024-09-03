// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// import {
//   LayoutDashboard,
//   Bot,
//   Calendar,
//   CalendarCheck,
//   MessageSquareText,
//   Bell,
//   User,
//   FileCheck,
//   Settings,
//   SquareCheckBig,
//   LogOut,
//   Menu,
//   X,
// } from "lucide-react";

// const links = [
//   { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
//   { href: "/dashboard/messages", label: "Messages", icon: MessageSquareText },
//   { href: "/dashboard/meetings", label: "Video & Calls", icon: CalendarCheck },
//   { href: "/dashboard/events", label: "Events & Calendar", icon: Calendar },
//   { href: "/dashboard/tasks", label: "Tasks", icon: SquareCheckBig },
//   { href: "/dashboard/requests", label: "Requests & Approvals", icon: FileCheck },
//   { href: "/dashboard/assistant", label: "AI Assistant", icon: Bot },
//   { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
//   { href: "/dashboard/settings", label: "Settings", icon: Settings },
//   { href: "/dashboard/profile", label: "Profile", icon: User },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <Button
//         variant="secondary"
//         className={`lg:hidden fixed top-2 z-50 transition-transform ${
//           isOpen ? "left-64 ml-2" : "left-4"
//         }`}
//         onClick={toggleSidebar}
//       >
//         {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//       </Button>
//       <div
//         className={`bg-slate-950 text-slate-100 w-64 min-h-screen space-y-4 flex flex-col justify-between
//           transition-transform transform ${
//             isOpen ? "translate-x-0" : "-translate-x-full"
//           } lg:translate-x-0 fixed lg:static z-50 lg:z-auto w-64 lg:w-auto`}
//       >
//         <div className="px-8 h-14 flex items-center border-b border-b-slate-600">
//           <Link href="/" className="flex items-center text-lg font-bold">
//             <Image
//               alt="BRB Titans Logo"
//               src="/brb-titans-logo.jpg"
//               width={32}
//               height={32}
//               className="w-8 h-8 rounded-lg"
//               priority
//             />
//             <span className="ml-2">BRB Titans</span>
//           </Link>
//         </div>

//         <div className="space-y-4 px-4">
//           <ul className="space-y-2">
//             {links.map((link) => (
//               <li key={link.href}>
//                 <Button asChild variant="ghost" className="w-full justify-start" onClick={toggleSidebar}>
//                   <Link href={link.href}>
//                     <link.icon className="mr-2" />
//                     <span className="flex">{link.label}</span>
//                   </Link>
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         </div>
          
//         <div className="p-4">
//           <Button asChild variant="destructive" className="w-full justify-start">
//             <Link href="/sign-out">
//               <LogOut />
//               <span className="ml-2 flex font-bold">
//                 Sign out
//               </span>
//             </Link>
//           </Button>
//         </div>
//       </div>


//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
//           onClick={toggleSidebar}
//         />
//       )}
//     </div>
//   );
// };

// export default Sidebar;

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Bot,
  Calendar,
  CalendarCheck,
  MessageSquareText,
  Bell,
  User,
  FileCheck,
  Settings,
  SquareCheckBig,
  LogOut,
  MoreVertical,
  ChevronFirst,
  ChevronLast, 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquareText },
  { href: "/dashboard/meetings", label: "Video & Calls", icon: CalendarCheck },
  { href: "/dashboard/events", label: "Events & Calendar", icon: Calendar },
  { href: "/dashboard/tasks", label: "Tasks", icon: SquareCheckBig },
  { href: "/dashboard/requests", label: "Requests & Approvals", icon: FileCheck },
  { href: "/dashboard/assistant", label: "AI Assistant", icon: Bot },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/profile", label: "Profile", icon: User },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={
      `h-screen ${ isOpen ? "w-64" : "" }`
    }>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* <Link href="/" className="flex items-center text-lg font-bold"> */}
          <Link href="/" className={
            `flex items-center text-lg font-bold transition-all ${ isOpen ? "block" : "hidden" }`
          }>
            <Image
              alt="BRB Titans Logo"
              src="/brb-titans-logo.jpg"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg"
              priority
            />
            <span className="ml-2">BRB Titans</span>
          </Link>
          <Button variant="ghost" size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronFirst /> : <ChevronLast />}
          </Button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
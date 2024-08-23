import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, Calendar, ClipboardList, Settings, User } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className={cn('h-full w-60 bg-gray-900 text-white p-4')}>
      <div className="flex flex-col justify-between h-full">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard">
              <Button variant="ghost" className="flex items-center justify-start w-full text-left text-white">
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Button variant="ghost" className="flex items-center justify-start w-full text-left text-white">
                <Calendar className="w-5 h-5 mr-3" />
                Calendar
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Button variant="ghost" className="flex items-center justify-start w-full text-left text-white">
                <ClipboardList className="w-5 h-5 mr-3" />
                Meetings
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Button variant="ghost" className="flex items-center justify-start w-full text-left text-white">
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile">
              <Button variant="ghost" className="flex items-center justify-start w-full text-left text-white">
                <User className="w-5 h-5 mr-3" />
                Profile
              </Button>
            </Link>
          </li>
        </ul>
        <div className="mt-8">
          <Link href="/sign-out">
            <Button variant="destructive" className="w-full text-left text-white font-semibold">
              Sign out
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

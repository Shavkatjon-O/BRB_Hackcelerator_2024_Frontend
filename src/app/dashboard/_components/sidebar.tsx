import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar, ClipboardList, Settings, User, Grid } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className={cn('w-60 p-4 border-r border-gray-300')}>
      <ul className="space-y-2">
        <li>
          <Link href="#">
            <Button variant="ghost" className="flex items-center justify-start w-full text-left">
              <Grid className="w-5 h-5 mr-3" />
              Dashboard
            </Button>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Button variant="ghost" className="flex items-center justify-start w-full text-left">
              <Calendar className="w-5 h-5 mr-3" />
              Calendar
            </Button>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Button variant="ghost" className="flex items-center justify-start w-full text-left">
              <ClipboardList className="w-5 h-5 mr-3" />
              Meetings
            </Button>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Button variant="ghost" className="flex items-center justify-start w-full text-left">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Button>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Button variant="ghost" className="flex items-center justify-start w-full text-left">
              <User className="w-5 h-5 mr-3" />
              Profile
            </Button>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

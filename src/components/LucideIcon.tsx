import { FC } from 'react';
import { 
  Home, 
  ChartBar, 
  User, 
  Lock,
} from 'lucide-react';

interface LucideIconProps {
  name: 'Home' | 'ChartBar' | 'User' | 'Lock'
  className?: string;
}

const iconMap = {
  Home: Home,
  ChartBar: ChartBar,
  User: User,
  Lock: Lock,
};

const LucideIcon: FC<LucideIconProps> = ({ name, className }) => {
  const Icon = iconMap[name] || Home;

  return <Icon className={className} />;
};

export default LucideIcon;

// src/components/LucideIcon.tsx
import { FC } from 'react';
import { Home, ChartBar, User, Lock } from 'lucide-react'; // Import all used icons

type IconName = 'Home' | 'ChartBar' | 'User' | 'Lock'; // Define allowed icon names

interface LucideIconProps {
  name: IconName;
  className?: string;
}

const icons: Record<IconName, FC<React.SVGProps<SVGSVGElement>>> = {
  Home,
  ChartBar,
  User,
  Lock,
};

const LucideIcon: FC<LucideIconProps> = ({ name, className }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.error(`Icon '${name}' does not exist.`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default LucideIcon;

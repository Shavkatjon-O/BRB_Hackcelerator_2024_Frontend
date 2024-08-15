import { FC } from 'react';
import { icons, Icon } from 'lucide-react';

type IconName = keyof typeof icons;

interface LucideIconProps {
  name: IconName;
  className?: string;
}

const LucideIcon: FC<LucideIconProps> = ({ name, className }) => {
  const IconComponent = icons[name] || icons['Circle'];

  return <IconComponent className={className} />;
};

export default LucideIcon;

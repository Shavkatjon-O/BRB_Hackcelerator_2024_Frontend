import { FC } from 'react';

interface ButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ href, className, children }) => (
  <a href={href} className={`inline-block py-2 px-4 rounded-lg ${className}`}>
    {children}
  </a>
);

export default Button;

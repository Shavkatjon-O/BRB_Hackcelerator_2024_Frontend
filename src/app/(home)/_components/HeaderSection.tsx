import Link from 'next/link';
import LucideIcon from '@/components/LucideIcon';

const HeaderSection = () => (
  <header className="py-4 bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold flex items-center">
        <LucideIcon name="Home" className="w-8 h-8 inline mr-2" />
        YourBank
      </Link>
      <nav className="space-x-6">
        <Link href="/about" className="text-gray-700">About</Link>
        <Link href="/services" className="text-gray-700">Services</Link>
        <Link href="/contact" className="text-gray-700">Contact</Link>
      </nav>
    </div>
  </header>
);

export default HeaderSection;

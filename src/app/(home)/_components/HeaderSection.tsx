import Link from 'next/link';
import { Menu } from 'lucide-react';

const HeaderSection = () => (
  <header className="py-4 bg-gray-800 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold flex items-center">
        <img src="brb-titans-logo.png" alt="BRB Titans Logo" className="w-8 h-8 mr-2" />
        BRB Titans
      </Link>
      <nav className="space-x-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/services" className="hover:text-gray-300">Services</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </nav>
      <button className="md:hidden">
        <Menu className="w-8 h-8" />
      </button>
    </div>
  </header>
);

export default HeaderSection;

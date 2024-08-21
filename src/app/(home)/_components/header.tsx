import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image 
            src="/brb-titans-logo.png"
            alt="BRB Titans Logo"
            width={40}
            height={40}  
            className="mr-2"
          />
          BRB Titans
        </Link>
        <nav className="space-x-6 hidden md:flex items-center justify-center">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="#" className="hover:text-gray-300">About</Link>
          <Link href="#" className="hover:text-gray-300">Services</Link>
          <Link href="#" className="hover:text-gray-300">Contact</Link>
          
          <Link href="/login" className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg">
            Login
          </Link>
        
        </nav>
        <button className="md:hidden">
          <Link href="/login" className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg">
            Login
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">
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
        </h1>
      </div>
    </header>
  );
};

export default Header;

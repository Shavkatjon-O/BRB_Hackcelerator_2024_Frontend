import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="h-20 px-4 absolute top-0 left-0 right-0 border-b flex justify-between items-center border-b-gray-300">
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

      <Button className="font-semibold">Sign Out</Button>
    </header>
  );
};

export default Header;
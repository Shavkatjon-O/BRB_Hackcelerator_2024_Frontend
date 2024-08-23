import { Button } from "@/components/ui/button"

import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <header className="h-16 px-4 absolute top-0 left-0 right-0 border-b flex justify-between items-center border-b-gray-300">
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

      <Link href="/sign-out">
        <Button className="font-semibold">Sign Out</Button>
      </Link>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Header = () => {
  return (
    <header className="border-b border-b-gray-300 p-4 flex justify-between">
      <Link href="/" className="text-2xl font-bold flex items-center">
        <img src="brb-titans-logo.png" alt="BRB Titans Logo" className="w-8 h-8 mr-2" />
        BRB Titans
      </Link>

      <Button className="font-semibold">Sign Out</Button>
    </header>
  );
};

export default Header;
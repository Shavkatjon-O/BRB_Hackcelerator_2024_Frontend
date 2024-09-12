import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="h-14 flex justify-center items-center bg-white border-t dark:bg-slate-950">
        <div className="container mx-auto text-center text-sm">
          <p>© 2024 BRB Titans. All rights reserved.</p>
        </div>
        <Button asChild>
          <Link href="/sign-out">About</Link>
        </Button>
      </footer>
    </>
  );
};
  
export default Footer;

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useUser from '@/hooks/useUser';

const Header = () => {
  const { user, loading, error } = useUser();

  if (error) {
    console.error(error);
  }

  return (
    <>
      <header className="sticky h-14 top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="h-full container flex justify-between items-center">
          <div className="md:w-1/3 w-1/2">
            <Link href="/" className="font-bold flex items-center">
              <Image 
                src="/brb-titans-logo.png"
                alt="BRB Titans Logo"
                width={40}
                height={40}  
                className="mr-2 w-8 h-8"
                priority
              />
              BRB Titans
            </Link>
          </div>

          <nav className="w-1/3 hidden md:flex items-center justify-center">              
            <Button variant="link">
              <Link href="/">Home</Link>
            </Button>
            <Button variant="link">
              <Link href="">About</Link>
            </Button>
            <Button variant="link">
              <Link href="">Services</Link>
            </Button>
            <Button variant="link">
              <Link href="">Contact</Link>
            </Button>
          </nav>
          
          <div className="md:w-1/3 w-1/2 flex justify-end">
            {
              loading ? (
                <span>Loading...</span>
              ) : (
                user ? (
                  <div className='flex items-center space-x-1'>
                    <Link href="/dashboard">
                      <Button variant="outline">
                      {user.email} <User size={20} className='ml-1'/>
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <Button variant="default">
                      <Link href="/sign-in">Sign In</Link>
                    </Button>
                  </>
                )
              )
            }
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

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
      <header className="h-14 bg-white border-b ">
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
                  <div className='space-x-1'>
                    <Link href="/sign-out">
                      <Button variant="default">Sign Out</Button>
                    </Link>
                    <Link href="/dashboard">
                      <Button variant="default">
                        <User size={20} className='mr-1'/> {user.email}
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

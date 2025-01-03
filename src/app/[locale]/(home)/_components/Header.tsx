"use client";

import {Link} from "@/i18n/routing";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import useUser from '@/hooks/useUser';
import { ModeToggle } from '@/components/mode-toggle';

const Header = () => {
  const { user, isLoaded, error } = useUser();

  if (error) {
    console.error(error);
  }

  return (
    <>
      <header className="sticky w-full h-14 top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:text-white">
        <div className="h-full container flex justify-between items-center">
          <div className="md:w-1/3 w-1/2">
            <Link href="/" className="font-bold text-lg flex items-center">
              <Image 
                src="/brb-titans-logo.jpg"
                alt="BRB Titans Logo"
                width={40}
                height={40}  
                className="mr-2 w-8 h-8 rounded-lg"
                priority
              />
              BRB Titans
            </Link>
          </div>

          <nav className="w-1/3 hidden md:flex items-center justify-center">
            <Link href="/">
              <Button variant="link" className='text-gray-600 dark:text-white'>Home</Button>
            </Link>
            <Link href="">
              <Button variant="link" className='text-gray-600 dark:text-white'>About</Button>
            </Link>
            <Link href="">
              <Button variant="link" className='text-gray-600 dark:text-white'>Services</Button>
            </Link>
            <Link href="">
              <Button variant="link" className='text-gray-600 dark:text-white'>Contact</Button>
            </Link>
          </nav>
          
          <div className="md:w-1/3 w-1/2 flex items-center justify-end space-x-2">
            {
              !isLoaded ? (
                <span>Loading...</span>
              ) : (
                user ? (
                  <div className='flex items-center space-x-1'>
                    <Link href="/dashboard">
                      <Button variant="default">
                        Dashboard
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <Link href="/sign-in">
                    <Button>Sign in</Button>
                  </Link>
                )
              )
            }
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

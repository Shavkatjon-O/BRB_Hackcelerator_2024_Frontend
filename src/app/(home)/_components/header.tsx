"use client";

import Image from 'next/image';
import Link from 'next/link';

import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useUser from '@/hooks/useUser';


const Header = () => {
  const { user, isLoading, error } = useUser();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-16 bg-gray-800 text-white">
      <div className="h-full container mx-auto flex justify-between items-center">
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
          
          {
            user ? (
              <div className='space-x-1'>
                <Link href="/sign-out">
                  <Button className="font-semibold bg-white text-black hover:text-white rounded-lg">Sign Out</Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="font-semibold bg-white text-black hover:text-white rounded-lg space-x-1">
                    <span>{user.email}</span>
                    <User size={20} />
                  </Button>
                </Link>
              </div>
            ) : (
              <Link href="/sign-in" className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg">
                Sign in
              </Link>
            )
          }
        
        </nav>
        <button className="md:hidden">
          <Link href="/sign-in" className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg">
            Login
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;

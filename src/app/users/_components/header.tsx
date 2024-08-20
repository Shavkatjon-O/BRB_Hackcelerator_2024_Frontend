import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">
          <Link href="/">
            GoodJob!
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;

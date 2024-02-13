'use client';
import Link from 'next/link';
import React from 'react';


const Navbar: React.FC = () => {
  
  const [session, setSession] = React.useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"
          className="text-white text-xl font-bold">Your Logo

        </Link>

        <div>
          {!session ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"              
              onClick={() => setSession(true)}
            >
              Log in
            </button>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"              
              onClick={() => setSession(false)}
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

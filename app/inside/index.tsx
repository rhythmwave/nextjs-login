"use client";

import { useAuth } from '../act/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Inside = () => {
  
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);


    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-4 text-black">Welcome to the Landing Page</h1>
        </div>
      </div>
    );
  };
  
  export default Inside;
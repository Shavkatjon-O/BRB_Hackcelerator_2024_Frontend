"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthHOC = (props: any) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const token = Cookies.get('access_token');
      console.log("Token from Cookies:", token);

      if (!token) {
        console.log("No token found, redirecting...");
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;

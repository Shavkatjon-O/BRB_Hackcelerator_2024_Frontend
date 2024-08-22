"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthHOC = (props: any) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const token = Cookies.get('access_token');

          if (!token) {
            router.push('/sign-in');
          } else {
            setIsLoading(false);
          }
        } catch (err) {
          setError('An error occurred during authentication.');
        }
      };

      checkAuth();
    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;

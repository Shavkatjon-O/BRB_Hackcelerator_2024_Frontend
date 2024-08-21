"use client";

import { useRouter } from 'next/navigation';

import React from 'react';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthHOC = (props: any) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(true);
    const token = Cookies.get('access_token');

    React.useEffect(() => {
      if (!token) {
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    }, [token, router]);

    if (isLoading) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;

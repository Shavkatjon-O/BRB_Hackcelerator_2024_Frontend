"use client";

import { useEffect } from 'react';
import Cookies from 'js-cookie';

const LogoutPage = () => {
  useEffect(() => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    
    if (typeof window !== 'undefined') {
      window.location.href = '/sign-in';
    }
  }, []);

  return null;
};

export default LogoutPage;

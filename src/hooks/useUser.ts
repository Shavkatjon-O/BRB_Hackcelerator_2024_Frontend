import { useState, useEffect } from 'react';
import { signInPerform } from '@/app/(home)/sign-in/signin.action';
import { signUpPerform } from '@/app/(home)/sign-up/signup.action';
import Cookies from 'js-cookie';

interface User {
  accessToken: string;
  refreshToken: string;
}

interface UseUserResult {
  user: User | null;
  error: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export function useUser(): UseUserResult {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    const refreshToken = Cookies.get('refresh_token');

    if (accessToken && refreshToken) {
      setUser({ accessToken, refreshToken });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const result = await signInPerform(email, password);

      if (result.success) {
        Cookies.set('access_token', result.accessToken);
        Cookies.set('refresh_token', result.refreshToken);
        setUser({ accessToken: result.accessToken, refreshToken: result.refreshToken });
        setError(null);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const result = await signUpPerform(email, password);

      if (result.success) {
        Cookies.set('access_token', result.accessToken);
        Cookies.set('refresh_token', result.refreshToken);
        setUser({ accessToken: result.accessToken, refreshToken: result.refreshToken });
        setError(null);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    setUser(null);
  };

  return {
    user,
    error,
    loading,
    signIn,
    signUp,
    signOut,
  };
}

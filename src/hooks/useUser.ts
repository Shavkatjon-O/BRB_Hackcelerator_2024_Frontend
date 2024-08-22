"use client";

import { useState, useEffect } from 'react';
import { currentUser } from '@/actions/authActions';

interface User {
  id: string;
  email: string;
}

interface UseUserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const useUser = (): UseUserState => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const result = await currentUser();
      console.log('Current user result:', result); // Debugging
      if (result.success) {
        if (!result.user?.id) {
          setError("User ID is missing");
          setLoading(false);
          return;
        }
        setUser(result.user);
      } else {
        setError(result.message);
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  return { user, loading, error };
};

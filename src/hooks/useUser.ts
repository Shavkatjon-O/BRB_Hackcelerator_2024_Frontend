"use client";

import { useState, useEffect } from 'react';
import { getUser } from '@/services/authServices';

interface User {
  id: string;
  email: string;
}

interface UseUserState {
  user: User | null;
  isLoaded: boolean;
  error: string | null;
}

export const useUser = (): UseUserState => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await getUser();

        if (user) {
          setUser(user);
        } else {
          setError("User not found.");
        }
      } catch (err) {
        setError("An error occurred while fetching user data.");
      } finally {
        setIsLoaded(true);
      }
    };

    loadUser();
  }, []);

  return { user, isLoaded, error };
};

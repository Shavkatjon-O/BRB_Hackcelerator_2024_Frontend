"use client";

import { useState, useEffect } from 'react';
import { currentUser } from '@/actions/authActions';

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
        const user = await currentUser();

        if (user) {
          if (!user.id) {
            setError("User ID is missing");
          } else {
            setUser(user);
          }
        } else {
          setError("Failed to fetch user data.");
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

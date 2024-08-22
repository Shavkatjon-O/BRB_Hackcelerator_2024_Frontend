"use client";

import { useState, useEffect } from 'react';
import { getUser } from '@/actions/authActions'; // Adjust the import path as needed

interface User {
  id: string;
  email: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, loading, error };
}

export async function currentUser(): Promise<User | null> {
  try {
    const response = await getUser();
    return response; 
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
}

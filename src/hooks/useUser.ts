"use client";

import { useEffect, useState } from "react";

import { getUser } from "@/services/auth";

const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();

        setUser(user);
      } catch (error: any) {

        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  } , []);

  return { user, loading, error };
}

export default useUser;
"use client";

import CoreAPI from "@/lib/coreApi";
import { useEffect, useState } from "react";
import { UserProfileType } from "@/types/authTypes";

const useUser = () => {
  const [user, setUser] = useState<UserProfileType | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await CoreAPI.get("/users/profile/");
        setUser(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoaded(true);
      }
    }
    fetchUserProfile();
  }, []);

  return { user, isLoaded, error };
}

export default useUser;

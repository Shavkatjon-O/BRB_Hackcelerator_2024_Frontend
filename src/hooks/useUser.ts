"use client";

import { useEffect, useState } from "react";

import { getUser } from "@/services/authServices";

import Cookies from "js-cookie";

const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("access_token");

      if (!token) {
        setLoading(false);
        return;
      }
      
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
"use client";

import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

const withAuth = (Component: React.ComponentType) => {
  const WithAuthComponent = (props: any) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const accessToken = Cookies.get("access_token");

      if (!accessToken) {
        router.push("/sign-in");
      } else {
        setLoading(false);
      }
    }, []);

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <Loader className="w-6 h-6 text-green-500" /> 
        </div>
      );
    }

    return <Component {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${Component.displayName || Component.name || 'Component'})`;

  return WithAuthComponent;
};

export default withAuth;
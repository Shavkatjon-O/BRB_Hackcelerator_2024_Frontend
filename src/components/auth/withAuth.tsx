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
      const accessToken = Cookies.get("accessToken");

      if (!accessToken) {
        router.push("/sign-in");
      } else {
        setLoading(false);
      }
    }, [router]);

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <Loader className="w-8 h-8 text-green-500 animate-spin" />
        </div>
      );
    }

    return <Component {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${Component.displayName || Component.name || "Component"})`;

  return WithAuthComponent;
};

export default withAuth;

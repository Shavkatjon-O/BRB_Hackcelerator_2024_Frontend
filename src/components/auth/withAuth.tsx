"use client";

import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { useRouter } from "@/i18n/routing";

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
      return null;
    }

    return <Component {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${Component.displayName || Component.name || "Component"})`;

  return WithAuthComponent;
};

export default withAuth;

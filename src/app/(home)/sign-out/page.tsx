"use client";

import { Loader } from "lucide-react";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

const SignOutPage = () => {
  useEffect(() => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");

    window.location.href = "/";
  }, []);

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 z-50">
      <Loader className="w-6 h-6" /> Signing out...
    </div>
  );
};

export default SignOutPage;
"use client";

import { Loader } from "lucide-react";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

const SignOutPage = () => {
  useEffect(() => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    window.location.href = "/";
  }, []);

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 z-50 bg-white flex justify-center items-center text-sm">
      <Loader className="w-4 h-4 mr-2" /> Signing out...
    </div>
  );
};

export default SignOutPage;
"use client";

import Cookies from "js-cookie";
import { Loader } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { tokenProvider } from "../_actions/token-provider";
import useUser from "@/hooks/useUser";

const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;

const StreamClientProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
  const { user, isLoaded, error } = useUser();
  const [tokenError, setTokenError] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      setTokenError("Access token not found. Please log in.");
      return;
    }

    if (user && apiKey && accessToken) {
      tokenProvider(accessToken)
        .then((token: string) => {
          const client = new StreamVideoClient({
            apiKey: apiKey,
            user: {
              id: String(user.id),
              name: user.email,
            },
            token,
          });
          setVideoClient(client);
        })
        .catch((err: any) => {
          console.error("Failed to retrieve token:", err);
          setTokenError("Failed to retrieve token. Please try again.");
        });
    }
  }, [user, apiKey]);

  if (!isLoaded || !videoClient) {
    if (tokenError) {
      return <div className="h-full flex items-center justify-center text-red-500">{tokenError}</div>;
    }
    return (
      <div className="h-full flex items-center justify-center">
        <Loader size={40} className="dark:text-white animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="h-full flex items-center justify-center text-red-500">{error.message}</div>;
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamClientProvider;

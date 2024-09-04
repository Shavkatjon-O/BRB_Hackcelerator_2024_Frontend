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

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");

    if (user && apiKey && accessToken) {
      tokenProvider(accessToken)
        .then((token: any) => {
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
        .catch((error: any) => {
          console.error("Failed to retrieve token:", error);
        });
    }
  }, [user, apiKey]);

  if (!isLoaded || !videoClient) return (
    <div className="h-full flex items-center justify-center">
      <Loader size={20} className="dark:text-white animate-spin" />
    </div>
  );
  if (error) return <div>{error.message}</div>;
  
  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamClientProvider;
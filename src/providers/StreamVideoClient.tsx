"use client";

import { ReactNode, useEffect, useState } from "react";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { Loader } from "lucide-react";

import Cookies from "js-cookie";
import useUser from "@/hooks/useUser";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
  const { user, loading, error } = useUser();

  useEffect(() => {
    if (user && apiKey) {
      const accessToken = Cookies.get("access_token");
      
      if (accessToken) {
        const client = new StreamVideoClient({
          apiKey,
          token: accessToken,
        });
        setVideoClient(client);
      }
    }
  }, [user, apiKey]);

  if (loading || !videoClient) {
    return <Loader />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;

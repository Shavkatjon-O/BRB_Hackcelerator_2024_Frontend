"use client";

import { tokenProvider } from "@/actions/tokenProvider";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import { Loader } from "lucide-react";

import Cookies from "js-cookie";
import useUser from "@/hooks/useUser";

const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
  const { user, loading, error } = useUser();

  useEffect(() => {
    const access_token = Cookies.get("access_token");

    if (user && apiKey && access_token) {
      tokenProvider(access_token)
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

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!videoClient) {
    return <Loader />;
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
"use client";

import { tokenProvider } from "@/actions/tokenProvider";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import { Loader } from "lucide-react";

import useUser from "@/hooks/useUser";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
  const { user, loading, error } = useUser();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  useEffect(() => {
    if (user) {
      tokenProvider().then((token) => {
        const client = new StreamVideoClient({
          apiKey: apiKey,
          userId: user.id,
          token,
        });

        setVideoClient(client);
      });
    }
  }, [user]);

  if (!videoClient) {
    return <Loader />;
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
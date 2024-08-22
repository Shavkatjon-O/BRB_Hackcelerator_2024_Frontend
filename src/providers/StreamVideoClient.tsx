"use client";

import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/app/dashboard/meetings/_components/Loader";
import { useUser } from "@/hooks/useUser";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, loading } = useUser();

  useEffect(() => {
    if (loading || !user) return;
    if (!API_KEY) throw new Error("Stream API key is missing");

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user.id,
        name: user.email || user.id,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, loading]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;

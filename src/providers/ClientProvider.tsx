"use client";

import useUser from "@/hooks/useUser";
import { UserProfileType } from "@/types/authTypes";
import { getToken } from "@/actions/tokenProvider";

import { Loader } from "lucide-react";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react";

import Cookies from "js-cookie";

interface ClientProviderProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  type: string;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const videoClient = useInitializeVideoClient();

  if (!videoClient) {
    return (
      <div className="h-full flex justify-center items-center">
        <Loader className="mx-auto animate-spin" />
      </div>
    )
  }

  return (
    <StreamVideo client={videoClient}>{children}</StreamVideo>
  );
}

function useInitializeVideoClient() {
  const { user, loading, error } = useUser();
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);

  useEffect(() => {
    if (loading) return;
    if (error) return

    let streamUser: User;

    if (user) {
      streamUser = {
        id: user.id,
        name: user.email,
        type: "user",
      }
    } else {
      const userID = Math.random().toString(36).substring(7);
      
      streamUser = {
        id: userID,
        type: "guest",
        name: `Guest ${userID}`, 
      }
    }

    const access_token = Cookies.get("access_token");

    const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;

    if (!apiKey) {
      throw new Error("Stream API Key is required");
    }

    const client = new StreamVideoClient(
      apiKey,
      streamUser,
      tokenProvider: user?.id ? getToken : undefined,
    )

    setVideoClient(client);

    return () => {
      client.disconnectUser();
      setVideoClient(null);
    }
  } , []);


  return videoClient;
}
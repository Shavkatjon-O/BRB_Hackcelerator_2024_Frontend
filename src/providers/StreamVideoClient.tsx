"use client";

import { tokenProvider } from "@/actions/stream.actions";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

import { getUser } from "@/actions/authActions";

import Loader from "@/app/dashboard/_components/Loader";

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
   const [videoClient, setVideoClient] = useState<StreamVideoClient>();
   const [user, setUser] = useState<any>(null);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      const fetchUser = async () => {
         try {
            const userData = await getUser();
            setUser(userData);
            setIsLoaded(true);
         } catch (error) {
            console.error("Error fetching user", error);
         }
      };

      fetchUser();
   }, []);

   useEffect(() => {
      if (!isLoaded || !user) return;
      if (!API_KEY) throw new Error("Stream API key is missing");

      const client = new StreamVideoClient({
         apiKey: API_KEY,
         user: {
            id: user.id,
            name: user.username || user.id,
            image: user.imageUrl,
         },
         tokenProvider,
      });

      setVideoClient(client);
   }, [user, isLoaded]);

   if (!videoClient) return <Loader />;

   return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;

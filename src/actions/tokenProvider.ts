"use server";

import CoreAPI from "@/lib/coreApi";
import { UserProfileType } from "@/types/authTypes";
import { StreamClient } from "@stream-io/node-sdk";

export async function getToken(access_token: string) {
  const streamApiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
  const streamApiSecret = process.env.STREAM_VIDEO_API_SECRET;

  if (!streamApiKey || !streamApiSecret) {
    throw new Error("Stream API Key and Secret are required");
  }

  const response = await CoreAPI.get("/users/profile/", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const user = response.data as UserProfileType;

  console.log("Generating token for user: ", user.id);

  if (!user) {
    throw new Error("User not found");
  }

  const streamClient = new StreamClient(streamApiKey, streamApiSecret);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(user.id, expirationTime, issuedAt);

  console.log("Successfully generated token: ", token);

  return token;
}

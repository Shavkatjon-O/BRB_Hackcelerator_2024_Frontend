"use server";

import { getUser } from "@/services/auth";
import { StreamClient } from "@stream-io/node-sdk";

export const tokenProvider = async () => {
  const apiKey = process.env.STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;
  const user = await getUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }
  if (!apiKey || !apiSecret) {
    throw new Error("Stream Chat API key or secret is missing");
  }

  const client = new StreamClient(apiKey, apiSecret);

  const expiresAt = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const createdAt = Math.floor(Date.now() / 1000) - 60;

  const token = client.createToken(user.id, expiresAt, createdAt);

  return token;
};
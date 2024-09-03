"use server";

import axios from "axios";
import { StreamClient } from "@stream-io/node-sdk";

const backendURL = process.env.BACKEND_URL;
const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
const apiSecret = process.env.STREAM_VIDEO_API_SECRET;

export const tokenProvider = async (accessToken: any) => {
  const response = await axios.get(`${backendURL}/users/profile/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response) {
    throw new Error("User is not authenticated.");
  }
  if (!apiKey || !apiSecret) {
    throw new Error("Stream Chat API key or secret is missing.");
  }

  const expiresAt = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const createdAt = Math.floor(Date.now() / 1000) - 60;
  
  const client = new StreamClient(apiKey, apiSecret);
  const token = client.createToken(String(response.data.id), expiresAt, createdAt);

  return token;
};

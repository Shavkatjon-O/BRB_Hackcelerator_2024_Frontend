"use server";

import { StreamClient } from "@stream-io/node-sdk";
import axios from "axios";

export const tokenProvider = async (access_token: any) => {
  const apiKey = process.env.STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;
  
  const response = await axios.get("http://localhost:8000/api/users/profile/", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response) {
    throw new Error("User is not authenticated");
  }
  if (!apiKey || !apiSecret) {
    throw new Error("Stream Chat API key or secret is missing");
  }

  const client = new StreamClient(apiKey, apiSecret);

  const expiresAt = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const createdAt = Math.floor(Date.now() / 1000) - 60;

  const token = client.createToken(response.data.id, expiresAt, createdAt);

  return token;
};
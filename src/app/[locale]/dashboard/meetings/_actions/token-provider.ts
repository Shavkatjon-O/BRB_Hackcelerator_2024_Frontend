"use server";

import axios from "axios";
import { StreamClient } from "@stream-io/node-sdk";

const backendURL = process.env.BACKEND_URL;
const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
const apiSecret = process.env.STREAM_VIDEO_API_SECRET;

let streamClientInstance: StreamClient | null = null;

const getOrCreateStreamClient = () => {
  if (!streamClientInstance) {
    if (!apiKey || !apiSecret) {
      throw new Error("Stream Chat API key or secret is missing.");
    }
    streamClientInstance = new StreamClient(apiKey, apiSecret);
  }
  return streamClientInstance;
};

export const tokenProvider = async (accessToken: any) => {
  try {
    const response = await axios.get(`${backendURL}/users/profile/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response) {
      throw new Error("User is not authenticated.");
    }

    const userId = String(response.data.id);
    const expiresAt = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const createdAt = Math.floor(Date.now() / 1000) - 60;

    const client = getOrCreateStreamClient();

    const token = client.createToken(userId, expiresAt, createdAt);

    return token;
  } catch (error: any) {
    console.error("Error in token provider:", error.message);
    throw error;
  }
};

"use server";

import { currentUser } from "./authActions";
import { StreamVideoClient } from "@stream-io/node-sdk"; // Verify this import

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  try {
    const { success, user, message } = await currentUser();

    if (!success || !user) {
      throw new Error(message || "User not found");
    }

    if (!apiKey || !apiSecret) {
      throw new Error("Stream API key or Secret is missing");
    }

    // Initialize the StreamVideoClient with options
    const streamClient = new StreamVideoClient({
      apiKey: apiKey,
      apiSecret: apiSecret,
    });

    // Define token expiration and issuance times
    const expirationTime = Math.round(Date.now() / 1000) + 60 * 60; // 1 hour from now
    const issuedAt = Math.floor(Date.now() / 1000) - 60; // 1 minute ago

    // Create the token (verify the correct method and parameters in SDK documentation)
    const token = streamClient.createToken(user.id, {
      expiresAt: expirationTime,
      issuedAt: issuedAt,
    });

    return token;
  } catch (error: any) {
    console.error("Error in tokenProvider:", error.message); // Log errors for debugging
    throw new Error(error.message || "An error occurred while creating the token");
  }
};

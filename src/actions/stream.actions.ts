"use server";

// import { currentUser } from "@clerk/nextjs/server";
import { currentUser } from "./authActions";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
   const { success, user, message } = await currentUser();

   if (!success || !user) {
      throw new Error(message || "User not found");
   }

   if (!apiKey || !apiSecret) {
      throw new Error("Stream API key or Secret is missing");
   }

   const streamClient = new StreamClient(apiKey, apiSecret);

   const expirationTime = Math.round(new Date().getTime() / 1000) + 60 * 60;
   const issuedAt = Math.floor(Date.now() / 1000) - 60;

   const token = streamClient.createToken(user.id, expirationTime, issuedAt);

   return token;
};

// interface User {
//    id: string;
//    email: string;
// }

// import { currentUser } from "./authActions";
// import { StreamClient } from "@stream-io/node-sdk";

// const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const apiSecret = process.env.STREAM_SECRET_KEY;

// export const tokenProvider = async () => {
//    const user: User | null = await currentUser();
//    if (!user) {
//       throw new Error("User not found");
//    }
//    if (!apiKey || !apiSecret) {
//       throw new Error("Stream API key or Secret is missing");
//    }

//    const streamClient = new StreamClient(apiKey, apiSecret);

//    const expirationTime = Math.round(new Date().getTime() / 1000) + 60 * 60;
//    const issuedAt = Math.floor(Date.now() / 1000) - 60;

//    const token = streamClient.createToken(user.id, expirationTime, issuedAt);

//    return token;
// };


import coreApi from "@/lib/coreApi";

import { DirectChatType } from "../_types/messagesTypes";

export const getUsers = async () => {
  return coreApi.get("/chats/users/");
}

export const createDirectChat = async (user1: string, user2: string) => {
  return coreApi.post(`/chats/directs/create/`, { user1, user2 }) as Promise<DirectChatType>;
}

export const getDirectChatList = async () => {
  return coreApi.get("/chats/directs/");
}

export const getDirectChat = async (id: string) => {
  return coreApi.get(`/chats/directs/${id}/`);
}

export const createDirectChatMessage = async (id: string, text: string) => {
  return coreApi.post(`/chats/directs/${id}/messages/create/`, { text: text, chat_id: id });
}

export const getDirectChatMessageList = async (id: string) => {
  return coreApi.get(`/chats/directs/${id}/messages/`);
}
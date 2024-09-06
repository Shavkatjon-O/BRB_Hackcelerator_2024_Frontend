import coreApi from "@/lib/coreApi";

export const getUsers = async () => {
  return coreApi.get("/chats/users/");
}

export const createDirectChat = async (user1: number, user2: number) => {
  return coreApi.post(`/chats/directs/create/`, { user1, user2 });
}

export const getDirectChatList = async () => {
  return coreApi.get("/chats/directs/");
}

export const getDirectChat = async (id: number) => {
  return coreApi.get(`/chats/directs/${id}/`);
}

export const getDirectChatMessages = async (id: number) => {
  return coreApi.get(`/chats/directs/${id}/messages/`);
}
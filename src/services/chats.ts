import CoreAPI from "@/lib/coreApi";

export const getMessages = async (chatId: string) => {
  const response = await CoreAPI.get(`/chats/messages/?chat_id=${chatId}/`);
  return response.data;
}

export const getChatDetails = async (chatId: string) => {
  const response = await CoreAPI.get(`/chats/${chatId}/`);
  return response.data;
}
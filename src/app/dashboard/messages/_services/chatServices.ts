import coreApi from "@/lib/coreApi";

export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  image: string;
}

export const getUsers = async () => {
  return coreApi.get("/chats/users/");
}
import CoreAPI from "@/lib/coreApi";
import { UserProfileType } from "@/types/auth";

export const getUser = async () => {
  const response = await CoreAPI.get("/users/profile/");
  return response.data as UserProfileType;
}
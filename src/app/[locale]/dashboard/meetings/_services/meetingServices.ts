import coreApi from "@/lib/coreApi";
import { UserProfileType } from "@/types/authTypes";

interface Meeting {
  id: string;
  user: UserProfileType;
  created_at: string;
  updated_at: string;
}


export const getMeetings = async () => {
  const { data } = await coreApi.get<Meeting[]>(`/meetings/list/`);
  return data;
};

export const createMeeting = async () => {
  const { data } = await coreApi.post<Meeting>('/meetings/create/');
  return data;
};


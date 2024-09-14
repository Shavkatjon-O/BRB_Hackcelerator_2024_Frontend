import coreApi from "@/lib/coreApi";
import { TaskListType } from "../_types/tasksTypes";

const getTasks = async (): Promise<TaskListType[]> => {
  const response = await coreApi.get("/tasks/");
  return response.data;
}

export {
  getTasks,
}
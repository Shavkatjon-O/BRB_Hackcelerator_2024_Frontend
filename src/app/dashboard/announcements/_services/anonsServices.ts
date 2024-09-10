import coreApi from "@/lib/coreApi";
import { AnonsListType, AnonsType } from "../_types/anonsTypes";

const getAnonsList = async () => {
  const response =  await coreApi.get('/anons/');
  return response.data;
}

const getAnonsDetail = async (id: number): Promise<AnonsType> => {
  const response =  await coreApi.get(`/anons/${id}/`);
  return response.data;
}

const updateAnonsReadStatus = async (id: number): Promise<void> => {
  await coreApi.put(`/anons/${id}/read/`);
}

export {
  getAnonsList,
  getAnonsDetail,
  updateAnonsReadStatus,
}
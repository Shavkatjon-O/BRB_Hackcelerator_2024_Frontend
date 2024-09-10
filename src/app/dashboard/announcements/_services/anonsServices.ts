import coreApi from "@/lib/coreApi";
import { AnonsListType, AnonsType } from "../_types/anonsTypes";

const getAnonsList = async (): Promise<AnonsListType[]> => {
  const response =  await coreApi.get('/anons/');
  return response.data;
}

const getAnonsDetail = async (id: number): Promise<AnonsType> => {
  const response =  await coreApi.get(`/anons/${id}`);
  return response.data;
}

export {
  getAnonsList,
  getAnonsDetail,
}
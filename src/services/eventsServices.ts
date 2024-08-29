import CoreAPI from "@/lib/coreApi";


export const getEventsList = async () => {
  const response = await CoreAPI.get("/events/");
  return response.data;
}

export const getEvent = async (eventId: string) => {
  const response = await CoreAPI.get(`/events/${eventId}/`);
  return response.data;
}

export const createEvent = async (eventData: any) => {
  const response = await CoreAPI.post("/events/create/", eventData);
  return response.data;
}

export const updateEvent = async (eventId: string, eventData: any) => {
  const response = await CoreAPI.put(`/events/${eventId}/update/`, eventData);
  return response.data;
}

export const deleteEvent = async (eventId: string) => {
  const response = await CoreAPI.delete(`/events/${eventId}/delete/`);
  return response.data;
}
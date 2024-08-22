import coreApi from '@/lib/coreApi';

export const signIn = async (email: string, password: string) => {
  const response = await coreApi.post('/token/', { email, password });
  return response.data;
};

export const signUp = async (email: string, password: string) => {
  const response = await coreApi.post('/signup/', { email, password });
  return response.data;
};

export const refreshToken = async (refreshToken: string) => {
  const response = await coreApi.post('/token/refresh/', { refresh: refreshToken });
  return response.data;
};

"use server";

import coreApi from '@/lib/coreApi';

export const signInService = async (email: string, password: string) => {
  const response = await coreApi.post('/token/', { email, password });
  return response.data;
};

export const signUpService = async (email: string, password: string) => {
  const response = await coreApi.post('/signup/', { email, password });
  return response.data;
};

export const refreshTokenService = async (refreshToken: string) => {
  const response = await coreApi.post('/token/refresh/', { refresh: refreshToken });
  return response.data;
};

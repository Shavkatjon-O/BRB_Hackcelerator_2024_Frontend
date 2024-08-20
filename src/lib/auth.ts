"use server";

import CoreAPI from '@/lib/coreApi';

export const signup = async (email: string, password: string) => {
  try {
    await CoreAPI.post('/users/signup/', { email, password });
    return { success: 'Account created successfully! Please log in.' };
  } catch (error) {
    return { error: 'Error creating account' };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await CoreAPI.post('/users/token/', { email, password });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    return { success: true };
  } catch (error) {
    return { error: 'Invalid email or password' };
  }
};

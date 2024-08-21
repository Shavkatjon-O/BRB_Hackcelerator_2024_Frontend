"use server";

import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';


export const signup = async (email: string, password: string) => {
  try {
    const response = await CoreAPI.post('/users/signup/', { email, password });
    if (typeof window !== 'undefined') {
      Cookies.set('access_token', response.data.access);
      Cookies.set('refresh_token', response.data.refresh);
    }
    return { success: 'Account created successfully!' };
  } catch (error) {
    return { error: 'Error creating account!' };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await CoreAPI.post('/users/token/', { email, password });
    if (typeof window !== 'undefined') {
      Cookies.set('access_token', response.data.access);
      Cookies.set('refresh_token', response.data.refresh);
    }
    return { success: true };
  } catch (error) {
    return { error: 'Invalid email or password' };
  }
};

export const refreshToken = async () => {
  try {
    const refresh = Cookies.get('refresh_token');
    
    if (!refresh) {
      return { error: 'No refresh token found' };
    }

    const response = await CoreAPI.post('/users/token/refresh/', { refresh });

    if (typeof window !== 'undefined') {
      Cookies.set('access_token', response.data.access);
    }
    return response.data.access;
  } catch (error) {
    return { error: 'Error refreshing token' };
  }
}
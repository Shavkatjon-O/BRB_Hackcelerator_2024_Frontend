"use server";

import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';

export const signup = async (email: string, password: string) => {
  try {
    const response = await CoreAPI.post('/users/signup/', { email, password });
    
    Cookies.set('access_token', response.data.access);
    Cookies.set('refresh_token', response.data.refresh);

    return { success: 'Account created successfully!' };
  } catch (error) {
    console.error('Error creating account:', error);
    return { error: 'Error creating account!' };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await CoreAPI.post('/users/token/', { email, password });
    
    Cookies.set('access_token', response.data.access);
    Cookies.set('refresh_token', response.data.refresh);

    return { success: true };
  } catch (error) {
    console.error('Invalid email or password:', error);
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

    Cookies.set('access_token', response.data.access);

    return response.data.access;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return { error: 'Error refreshing token' };
  }
};

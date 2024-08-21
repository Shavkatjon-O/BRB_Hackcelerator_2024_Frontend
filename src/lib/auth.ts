"use server";

import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';

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

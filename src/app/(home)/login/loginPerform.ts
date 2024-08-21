"use server";

import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';

export async function loginPerform(email: string, password: string) {
  try {
    const response = await CoreAPI.post('/users/token/', { email, password });
    
    Cookies.set('access_token', response.data.access);
    Cookies.set('refresh_token', response.data.refresh);

    return {
        success: true,
        message: 'Login successful!',
    };
  
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
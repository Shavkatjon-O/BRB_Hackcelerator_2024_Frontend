"use server";

import CoreAPI from '@/lib/coreApi';

export async function loginPerform(email: string, password: string) {
  try {
    const response = await CoreAPI.post('/users/token/', { email, password });
    
    return {
        success: true,
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
        message: 'Login successful!',
    };
  
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
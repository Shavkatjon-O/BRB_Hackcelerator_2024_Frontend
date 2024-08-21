"use server";

import CoreAPI from '@/lib/coreApi';

export async function signupPerform(email: string, password: string) {
  try {
    const response = await CoreAPI.post('/users/signup/', { email, password });
    
    return {
        success: true,
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
        message: 'Account created successfully!',
    };
  
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
"use server";

import { signInService, signUpService } from '@/services/authServices';

export async function signIn(email: string, password: string) {
  try {
    const response = await signInService(email, password);
    
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

export async function signUp(email: string, password: string) {
  try {
    const response = await signUpService(email, password);
    
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
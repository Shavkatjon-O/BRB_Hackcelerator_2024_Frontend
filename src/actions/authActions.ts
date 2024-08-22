"use server";

import { signInService, signUpService } from '@/services/authServices';
import CoreAPI from '@/lib/coreApi';

export async function signIn(email: string, password: string) {
  try {
    const response = await signInService(email, password);
    
    return {
      success: true,
      accessToken: response.access,
      refreshToken: response.refresh,
      message: 'Login successful!',
    };
  } catch (error: any) {
    console.error('SignIn Error:', error); // Log error for debugging
    
    const errorMessage = error.response?.data?.detail || 'Something went wrong. Please try again.';

    return {
      success: false,
      message: errorMessage,
    };
  }
}

export async function signUp(email: string, password: string) {
  try {
    const response = await signUpService(email, password);
    
    return {
      success: true,
      accessToken: response.access,
      refreshToken: response.refresh,
      message: 'Account created successfully!',
    };
  } catch (error: any) {
    const errorMessage = error.response?.data?.detail || 'Something went wrong. Please try again.';

    return {
      success: false,
      message: errorMessage,
    };
  }
}

export async function getUser() {
  try {
    const response = await CoreAPI.get('/users/user/');
    return response.data;
  } catch (error) {
    console.error('GetUser Error:', error); // Log error for debugging
    return null;
  }
}

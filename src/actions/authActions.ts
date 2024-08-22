"use client";

import CoreAPI from "@/lib/coreApi";
import Cookies from "js-cookie";


export async function signIn(email: string, password: string) {
  try {
    const response = await CoreAPI.post("/users/token/", { email, password });
    const successMessage = response.data.detail || "Login successful!";

    Cookies.set("access_token", response.data.access);
    Cookies.set("refresh_token", response.data.refresh);

    return {
      success: true,
      accessToken: response.data.access,
      refreshToken: response.data.refresh,
      message: successMessage,
    };
  } catch (error: any) {
    const errorMessage = error.response?.data?.detail || "Something went wrong. Please try again.";

    return {
      success: false,
      message: errorMessage,
    };
  }
}

export async function signUp(email: string, password: string) {
  try {
    const response = await CoreAPI.post("/users/signup/", { email, password });
    const successMessage = response.data.detail || "Account created successfully!";

    Cookies.set("access_token", response.data.access);
    Cookies.set("refresh_token", response.data.refresh);

    return {
      success: true,
      accessToken: response.data.access,
      refreshToken: response.data.refresh,
      message: successMessage,
      
    };
  } catch (error: any) {
    const errorMessage = error.response?.data?.detail || "Something went wrong. Please try again.";

    return {
      success: false,
      message: errorMessage,
    };
  }
}

export async function currentUser() {
  try {
    const response = await CoreAPI.get("/users/user/");

    return {
      success: true,
      user: response.data,
    };
  } catch (error: any) {
    const errorMessage = error.response?.data?.detail || "Something went wrong. Please try again.";

    return {
      success: false,
      message: errorMessage,
    };
  }
} 
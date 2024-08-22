import axios from "axios";
import Cookies from "js-cookie";

const isClient = typeof window !== 'undefined';

const CoreAPI = axios.create({
  baseURL: isClient ? process.env.NEXT_PUBLIC_API_URL : process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

CoreAPI.interceptors.request.use((config) => {
  if (isClient) {
    const token = Cookies.get('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default CoreAPI;

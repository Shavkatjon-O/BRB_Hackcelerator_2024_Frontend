import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;

const coreApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

coreApi.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

coreApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      const refreshToken = Cookies.get('refreshToken');

      if (refreshToken && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const response = await coreApi.post('/users/token/refresh/', {
            refresh: refreshToken,
          });
          const { access, refresh } = response.data;
          
          Cookies.set('accessToken', access);
          Cookies.set('refreshToken', refresh);
          
          originalRequest.headers['Authorization'] = `Bearer ${access}`;

          return coreApi(originalRequest);
        } catch (error) {
          Cookies.remove('accessToken');
          Cookies.remove('refreshToken');
          
          window.location.href = '/sign-in';
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default coreApi;
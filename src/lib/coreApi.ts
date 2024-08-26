import axios from 'axios';
import Cookies from 'js-cookie';

const isClient = typeof window !== 'undefined';

const CoreAPI = axios.create({
  baseURL: isClient ? process.env.NEXT_PUBLIC_BACKEND_URL : process.env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

CoreAPI.interceptors.request.use(
  (config) => {
    if (isClient) {
      const token = Cookies.get('access_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } 
    return config;
  },
  (error) => Promise.reject(error)
);

CoreAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      const refreshToken = Cookies.get('refresh_token');

      if (refreshToken && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const response = await CoreAPI.post('/users/token/refresh/', {
            refresh: refreshToken,
          });

          const { access } = response.data;

          Cookies.set('access_token', access);
          originalRequest.headers['Authorization'] = `Bearer ${access}`;

          return CoreAPI(originalRequest);
          
        } catch (refreshError) {
          Cookies.remove('access_token');
          Cookies.remove('refresh_token');

          if (isClient) {
            window.location.href = '/sign-in';
          }
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default CoreAPI;
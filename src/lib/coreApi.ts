// import axios from "axios";
// import Cookies from "js-cookie";

// const CoreAPI = axios.create({
//   baseURL: process.env.BACKEND_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// CoreAPI.interceptors.request.use((config) => {
//   const token = Cookies.get('access_token');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// export default CoreAPI;

import axios from 'axios';
import Cookies from 'js-cookie';

const CoreAPI = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

CoreAPI.interceptors.request.use((config) => {
  const accessToken = Cookies.get('access_token');
  const csrfToken = Cookies.get('csrftoken'); // Make sure the CSRF token cookie name matches your setup
  console.log('CSRF Token:', Cookies.get('csrftoken'));


  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default CoreAPI;

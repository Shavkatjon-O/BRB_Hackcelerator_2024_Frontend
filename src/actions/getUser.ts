import axios from "axios";

import Cookies from "js-cookie";

export async function getUser() {
    try {
      const token = Cookies.get('access_token');
  
      const response = await axios.get('http://localhost:8000/api/v1/users/user/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('GetUser Error:', error); // Log error for debugging
      return null;
    }
  }
  
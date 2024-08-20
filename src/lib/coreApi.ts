import axios from "axios";

const CoreAPI = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default CoreAPI;
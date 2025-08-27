import axios from "axios";

const client = axios.create({
  baseURL: "https://api.securepegawin.com/api", // ✅ include /api prefix here
  withCredentials: true, // for Sanctum/JWT if needed
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Add Authorization header automatically if token exists
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;

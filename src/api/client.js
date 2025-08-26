import axios from "axios";

const client = axios.create({
  baseURL: "https://api.securepegawin.com",
  withCredentials: true, // ✅ allow sending cookies (important for Sanctum/JWT)
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default client;

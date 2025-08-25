// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // your Laravel API
  withCredentials: true, // ✅ allow sending cookies (important for Sanctum/JWT)
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default api;

import { createContext, useContext, useEffect, useState } from "react";
import client from "../api/client";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return setReady(true);
    client.get("/auth/me").then(res => {
      setUser(res.data);
      setReady(true);
    }).catch(()=>setReady(true));
  }, []);

  const login = async (email, password) => {
    const { data } = await client.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    setUser(data.user);
  };

  const register = async (payload) => {
    const { data } = await client.post("/auth/register", payload);
    localStorage.setItem("token", data.token);
    setUser(data.user);
  };

  const logout = async () => {
    try { await client.post("/auth/logout"); } catch {}
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, ready, login, register, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

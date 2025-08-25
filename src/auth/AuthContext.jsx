import { createContext, useContext, useEffect, useState } from "react";
import client from "../api/client";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Attach token to axios client
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      client.get("/me")
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
          delete client.defaults.headers.common["Authorization"];
          setUser(null);
        })
        .finally(() => setReady(true));
    } else {
      setReady(true);
    }
  }, []);

  const login = async (email, password) => {
    const { data } = await client.post("/login", { email, password });

    localStorage.setItem("token", data.token);
    client.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    setUser(data.user);
  };

  const register = async (payload) => {
    const { data } = await client.post("/register", payload);

    localStorage.setItem("token", data.token);
    client.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    setUser(data.user);
  };

  const logout = async () => {
    try {
      await client.post("/logout");
    } catch {}

    localStorage.removeItem("token");
    delete client.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, ready, login, register, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

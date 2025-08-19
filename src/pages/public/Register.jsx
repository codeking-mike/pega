import { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const { login } = useAuth();
  const nav = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try{
      await login(email,password);
      nav("/dashboard");
    }catch(e){ setErr(e.response?.data?.message || "Login failed"); }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Login</h2>
      {err && <div className="text-red-600">{err}</div>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="border p-2 w-full" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="border p-2 w-full" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="px-4 py-2 border rounded w-full">Login</button>
      </form>
    </div>
  );
}

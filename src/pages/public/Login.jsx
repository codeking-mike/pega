import { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import logo from "../../../public/images/spw-logo.png";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErr("");
    try {
      await login(email, password);
      nav("/dashboard");
    } catch (e) {
      setSubmitting(false);
      setErr(e.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700"
      >
        {/* Logo + Welcome */}
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="logo"
            className="mx-auto w-28"
          />
          <h2 className="text-2xl font-bold text-gray-100 mt-4">
            Welcome Back 👋
          </h2>
          <p className="text-sm text-gray-400">Sign in to continue</p>
          {err && <div className="mt-3 text-red-400">{err}</div>}
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900/60 text-gray-200 placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900/60 text-gray-200 placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-xl text-white font-semibold shadow-lg transition-all 
              ${
                submitting
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:opacity-90"
              }`}
          >
            {submitting ? "Signing In..." : "Sign In"}
          </motion.button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 space-y-3">
          <a
            href="/forgot"
            className="block text-sm text-gray-400 hover:text-gray-200 transition"
          >
            Forgot Password?
          </a>
          <p className="text-sm text-gray-400">
            Not a member?{" "}
            <a
              href="/register"
              className="text-orange-400 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

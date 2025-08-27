import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});

    try {
      await login(email, password);
      nav("/dashboard");
    } catch (e) {
      if (e.response?.status === 422) {
        // Laravel validation errors
        setErrors(e.response.data.errors || {});
      } else {
        // Generic error
        setErrors({ general: e.response?.data?.message || "Login failed" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

      {errors.general && (
        <div className="bg-red-600 text-white p-3 rounded-md mb-4">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email[0]}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password[0]}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 rounded-md font-semibold ${
            submitting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {submitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

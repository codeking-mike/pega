import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import logo from "../../../public/images/spw-logo.png";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null); // ✅ separate general error message

  axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setErrors({});
  setErrorMsg(null);
  setSuccess(null);

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/register", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // ✅ Handle Laravel default response
    if (response.status === 201 || response.status === 200) {
      setSuccess("Registration successful! Please login to continue.");

      // ⏳ Redirect after showing message
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }
  } catch (error) {
    if (error.response?.data?.errors) {
      setErrors(error.response.data.errors);
    } else if (error.response?.data?.message) {
      setErrorMsg(error.response.data.message);
    } else {
      setErrorMsg("Something went wrong. Please try again.");
    }
    console.error("Registration failed:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-lg p-8">
         {/* Logo + Welcome */}
                <div className="text-center mb-4">
                  <img
                    src={logo}
                    alt="logo"
                    className="mx-auto w-28"
                  />
                  <h2 className="text-2xl font-bold text-gray-100 mt-1">
                    Create Account
                  </h2>
                  <p className="text-sm text-gray-400">Fill the form below</p>
                 
                </div>

        {/* ✅ Success Message */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-4 flex items-center gap-2 p-3 rounded-lg bg-green-100 text-green-700"
            >
              <CheckCircle className="w-5 h-5" />
              <p>{success}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ❌ General Error Message */}
        <AnimatePresence>
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-4 flex items-center gap-2 p-3 rounded-lg bg-red-100 text-red-700"
            >
              <XCircle className="w-5 h-5" />
              <p>{errorMsg}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {errors.name[0]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {errors.email[0]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter password"
            />
            <AnimatePresence>
              {errors.password && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {errors.password[0]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Re-enter password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:bg-indigo-700 disabled:opacity-50 text-white font-medium py-2 rounded-lg transition-colors"
          >
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-gray-400 text-center text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-orange-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

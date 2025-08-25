import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../public/images/spw-logo.png';
import {
  Menu,
  X,
  LayoutDashboard,
  DollarSign,
  ArrowDownToLine,
  User,
  Settings,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import toast from "react-hot-toast";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const navLinks = [
    { name: "Overview", to: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Deposit", to: "/dashboard/deposit", icon: <DollarSign size={18} /> },
    { name: "Withdraw", to: "/dashboard/withdrawal", icon: <ArrowDownToLine size={18} /> },
    { name: "My Deposits", to: "/dashboard/my-deposits", icon: <DollarSign size={18} /> },
    { name: "Transactions", to: "/dashboard/transactions", icon: <ArrowDownToLine size={18} /> },
  ];

  const profileLinks = [
    { name: "My Profile", to: "/dashboard/profile", icon: <User size={18} /> },
    { name: "Settings", to: "/dashboard/settings", icon: <Settings size={18} /> },
    { name: "Upgrade Security", to: "/dashboard/security", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col backdrop-blur-md bg-white/20 border-r border-white/20 p-6">
        <h1 className="text-2xl font-bold mb-6"><img src={logo} /></h1>
        <nav className="space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu button */}
      <div className="absolute top-4 left-4 md:hidden z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white/20 backdrop-blur-md"
        >
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar for mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 z-40 w-64 backdrop-blur-xl bg-white/10 border-r border-white/20 p-6 md:hidden"
          >
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-end px-6 py-4 border-b border-white/10 backdrop-blur-md bg-white/10 z-40">
          {/* Profile Avatar */}
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center"
            >
              <User size={20} />
            </button>

            <AnimatePresence>
              {profileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-gray-700 border border-white/20 rounded-xl shadow-lg p-2 z-50"
                >
                  {profileLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  ))}

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white/20 transition text-red-400"
                  >
                    <LogOut size={18} />
                    Log Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto z-60">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

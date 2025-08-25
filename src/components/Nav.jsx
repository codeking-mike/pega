import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../auth/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../public/images/spw-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Markets", path: "/markets" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl bg-black/40 backdrop-blur-lg border border-gray-800 shadow-lg px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 font-bold text-xl"
          >
            <img src={logo} className="w-[120px] h-[70px]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-lg font-medium transition duration-300 
                  ${
                    location.pathname === link.path
                      ? "text-yellow-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-orange-500 after:rounded-full"
                      : "text-gray-300 hover:text-yellow-300"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {!user && (
              <Link
                to="/login"
                className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-lg hover:opacity-90 transition"
              >
                Login
              </Link>
            )}
            {user && (
              <>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-xl border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-orange-400 transition"
                >
                  Logout
                </button>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-gray-300 hover:text-purple-400 transition"
                >
                  Dashboard
                </Link>
                {user?.role === "admin" && (
                  <Link
                    to="/admin/deposits"
                    className="px-4 py-2 text-gray-300 hover:text-orange-400 transition"
                  >
                    Admin
                  </Link>
                )}
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md bg-black/50 text-gray-300 hover:text-orange-400 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/70 backdrop-blur-md border-t border-gray-700 text-white shadow-lg"
          >
            <ul className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg transition ${
                      location.pathname === link.path
                        ? "text-orange-400 font-semibold"
                        : "hover:text-orange-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                {!user && (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full block text-center px-7 py-2 rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-lg hover:opacity-90 transition"
                  >
                    Login
                  </Link>
                )}
                {user && (
                  <>
                    <button
                      onClick={logout}
                      className="w-full px-4 py-2 rounded-xl border border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 transition"
                    >
                      Logout
                    </button>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block mt-3 text-gray-300 hover:text-orange-400 transition"
                    >
                      Dashboard
                    </Link>
                    {user?.role === "admin" && (
                      <Link
                        to="/admin/deposits"
                        onClick={() => setIsOpen(false)}
                        className="block mt-2 text-gray-300 hover:text-orange-400 transition"
                      >
                        Admin
                      </Link>
                    )}
                  </>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

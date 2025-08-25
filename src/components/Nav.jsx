import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../auth/AuthContext";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plans", path: "/plans" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-950 shadow-md z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center text-gray-300 font-bold text-xl">
            <svg
              className="h-8 w-8 mr-2 text-gray-300"
              viewBox="0 0 28 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147..." />
            </svg>
            Securepegawin
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition ${
                  location.pathname === link.path
                    ? "text-yellow-600 font-semibold"
                    : "text-gray-200 hover:text-yellow-600"
                }`}
              >
                {link.name}
              </Link>
              
            ))}
            {!user && (<>
          <Link to="/login" className="ml-4 px-5 py-2 bg-yellow-600 text-white rounded-md shadow hover:bg-yellow-500 transition">Login</Link>
          
          </>)}
           {user && (<button onClick={logout} className="px-3 py-1 border rounded">Logout</button>)}
            {user && <Link to="/dashboard">Dashboard</Link>}
            {user?.role === 'admin' && <Link to="/admin/deposits">Admin</Link>}

            
            
        
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md bg-gray-100 text-gray-600 hover:text-indigo-600 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 text-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-lg transition ${
                  location.pathname === link.path
                    ? "text-yellow-300 font-semibold"
                    : "hover:text-yellow-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            {!user && (<>
          <Link to="/login" className="px-7 py-2 bg-yellow-600 w-full text-white rounded-md shadow hover:bg-yellow-700 transition">Login</Link>
          
          </>)}
           {user && (<button onClick={logout} className="px-3 py-1 border rounded">Logout</button>)}
            {user && <Link to="/dashboard">Dashboard</Link>}
            {user?.role === 'admin' && <Link to="/admin/deposits">Admin</Link>}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

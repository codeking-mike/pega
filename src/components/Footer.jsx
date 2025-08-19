import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Securepegawin</h2>
            <p className="text-gray-300 mb-4 max-w-sm">
              A secure platform for every investor from beginner to advanced 
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/about" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="/plans" className="hover:text-white transition">Investment Plan</a>
              </li>
             
              <li>
                <a href="/contact" className="hover:text-white transition">Contact Us</a>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: support@securepegawin</li>
              
            </ul>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-3 bg-gray-700 rounded-lg hover:bg-yellow-600 transition text-white font-medium"
            >
              Get in Touch
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Securepegawin Investment Inc,. All rights reserved.
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-20 -z-10" />
    </footer>
  );
};

export default Footer;

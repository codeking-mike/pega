import React from 'react'
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import banner1 from '../../public/images/banner-image.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-28 lg:pt-40 pb-24 px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:gap-10">
        
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-5/12 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
            Trade Assets in <br />
            Secure Platform
          </h1>
          <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-gray-200 text-lg leading-relaxed">
            At Securepegawin, we help you trade your assets in a seamless and secure platform. Wether you are a newbie 
            or pro trade or investor, our AI powered trading systems helps you navigate the complexities of the global market with ease.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.a
              href="/register"
              className="inline-flex items-center px-6 py-3 text-gray-200 font-semibold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-lg shadow-md hover:text-gray-600 transition"
              whileHover={{ scale: 1.05 }}
            >
              Open an Account <FaArrowRight className="ml-2" />
            </motion.a>
            
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-7/12 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={banner1}
              alt="Securepegawin"
              className="w-full object-cover transform hover:scale-105 transition duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
          </div>

          {/* Decorative Dots */}
          <span className="absolute -bottom-8 -left-8 z-[-1] opacity-70">
            <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[...Array(5)].map((_, row) =>
                [...Array(5)].map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={2.5 + col * 22}
                    cy={2.5 + row * 22}
                    r="2.5"
                    fill="#3056D3"
                  />
                ))
              )}
            </svg>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
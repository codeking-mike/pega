import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaGlobe, FaMoneyBill } from 'react-icons/fa';
import upgradeimage from '../../public/images/img-upgrade.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaGlobe className="text-4xl text-yellow-600" />,
      title: 'Global Access',
      description:
        'Invest globally in stocks, options, futures, cryptocurrencies, bonds and funds from a single unified platform',
    },
    {
      icon: <FaMoneyBill className="text-4xl text-yellow-600" />,
      title: 'No Hidden Fees',
      description:
        'Transparent pricing. No hidden fees and unexpected charges',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-600" />,
      title: 'Secure & Verified',
      description:
        'Secure platform, automated risk controls, regulatory compliance and all assets are matched 1:1 and double insured ',
    },
  ];

  return (
     <>
    <section className="bg-gray-800 py-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto text-center max-w-6xl">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold text-gray-100 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          AI Power Meets Simplicity
        </motion.h2>
        <motion.p
          className="text-gray-200 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Experience the future of trading and Investments with SecurePegawin
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40 -z-10" />
    </section>

    <section className="overflow-hidden px-4 bg-gray-800 text-white pb-20 pt-20 lg:pb-[90px] lg:pt-[120px] relative">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Left: Image Collage */}
        <div className="w-full px-4 lg:w-6/12 mb-10 lg:mb-0">
          <div className="-mx-3 flex items-center sm:-mx-4">
            <div className="w-full px-3 sm:px-4 xl:w-1/2 space-y-4">
              <motion.img
                src={upgradeimage}
                alt="Aid Support 1"
                className="w-full rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <motion.div
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block text-lg font-semibold text-yellow-600">
              SecurePegaWin
            </span>
            <h2 className="mb-5 text-3xl lg:text-4xl font-bold text-white leading-snug">
              Powerful Investment Platform to Help You Succeed
            </h2>
            <p className="mb-5 text-base text-gray-200 leading-relaxed">
              A secure platform for every investor from beginner to advanced on mobile, web and desktop. Discover new investment opportunities with a team
              and a platform you can trust
            </p>
            <p className="mb-8 text-base text-gray-200 leading-relaxed">
              Spot market opportunitird, analyze results, manage your account and make better decisions with our expert financial advisors
            
            </p>
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-lg bg-yellow-600 px-8 py-3 text-base font-semibold text-indigo-100 hover:bg-indigo-100 transition duration-300 shadow-md"
            >
              Open Account
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl opacity-20 -z-10" />
    </section>
    </>
  );
};

export default FeaturesSection;

import React from 'react'
import { FaCubesStacked, FaSquareCheck } from 'react-icons/fa6'

const Aboutcontent = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/images/img-work-with-us.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Secure Pegawin
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Empowering lives through compassion, support, and sustainable solutions for the most vulnerable.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Who <span className="text-indigo-600">We</span> Are
            </h2>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              Abbet Charity Foundation is a non-governmental organization committed to improving
              the lives of the poor, vulnerable, and underserved communities. We provide financial 
              assistance, educational support, healthcare outreach, and sustainable empowerment programs to individuals and families in need.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
          {/* Mission */}
          <div className="w-full md:w-1/2 bg-white rounded-[20px] shadow-md p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <FaCubesStacked className="text-[50px] text-white bg-indigo-800 rounded-full p-3" />
            </div>
            <h3 className="text-2xl font-semibold text-dark mb-3">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To provide accessible and sustainable support to the most vulnerable in society by offering financial aid, healthcare, and development programs that restore dignity and hope.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full md:w-1/2 bg-white rounded-[20px] shadow-md p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <FaSquareCheck className="text-[50px] text-white bg-indigo-800 rounded-full p-3" />
            </div>
            <h3 className="text-2xl font-semibold text-dark mb-3">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              A society where every individual, regardless of their background, has access to basic needs and opportunities for a better life.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutcontent

import React from 'react'
import { Link } from 'react-router-dom'

const Calltoaction = () => {
  return (
    <section className="bg-gray-900 pb-10">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto flex flex-col items-start justify-between gap-6 max-w-6xl rounded-3xl bg-gray-950 p-8 shadow-2xl md:flex-row md:items-center">
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Let's help you succeed
            </h2>
            <p className="mt-4 text-gray-300">
              Get in touch with us and find the unique solution that suits your goals and financial aspirations
            </p>
          </div>

          <div className="w-full md:w-auto text-left md:text-right">
            <Link
              to="https://account.securepegawin.com/register.php"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 px-6 py-3 text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl focus:ring-3 focus:ring-yellow-400 focus:outline-none"
            >
              <span className="text-sm font-medium">JOIN US NOW</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calltoaction
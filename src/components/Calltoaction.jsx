import React from 'react'
import { Link } from 'react-router-dom'

const Calltoaction = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pb-10">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
        Let's help you succeed
      </h2>

      <p className="text-gray-100 sm:mt-4 sm:block">
        Get in touch with us and find the unique solution that suits your goals and financial aspirations
      </p>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
        <Link to='/register'
        
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-yellow-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> JOIN US NOW </span>

          <svg
            className="size-5 shadow-sm rtl:rotate-180"
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
</section>
  )
}

export default Calltoaction
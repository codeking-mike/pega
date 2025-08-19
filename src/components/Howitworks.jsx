import React from 'react';
import { Fa1, Fa2, Fa3 } from 'react-icons/fa6';

const Howitworks = () => {
  return (
    <section className="pb-12 pt-20 px-10 lg:pb-[90px] lg:pt-[120px] bg-gray-900">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                  
                  <h2
                    className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px] text-gray-100"
                  >
                    How it Works
                  </h2>
                  
                </div>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="mb-9 rounded-[20px] bg-gray-800 flex flex-col justify-center p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 dark:bg-dark-2"
                >
                  
                  <h4
                    className="mb-[14px] text-2xl font-semibold text-white text-center"
                  >
                    STEP 1
                  </h4>
                  <p className="text-body-color text-white mb-2">
                  Create an account. It only takes a few minutes
                  </p>
                  
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="mb-9 rounded-[20px] bg-gray-800 flex flex-col justify-center p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
                >
                  
                  <h4
                    className="mb-[14px] text-2xl font-semibold text-white text-center"
                  >
                    STEP 2
                  </h4>
                  <p className="text-body-color text-white mb-3">
                  Fund your account. You can fund your account via paypal, crypto, and wire transfer
                  </p>
                  
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="mb-9 rounded-[20px] bg-gray-800 flex flex-col justify-center p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 dark:bg-dark-2"
                >
                  
                  <h4
                    className="mb-[14px] text-2xl font-semibold text-white text-center"
                  >
                    STEP 3
                  </h4>
                  <p className="text-body-color text-white">
                  Get Started Trading. Take your investing to the next level.
                  </p>
                  
                </div>
              </div>
              
              
              
            </div>
          </div>
        </section>
  )
}

export default Howitworks
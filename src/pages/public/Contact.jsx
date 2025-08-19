import React from 'react';
import { FaEnvelope, FaHouse, FaPhone, FaFacebook, FaInstagram, FaX, FaLinkedin } from 'react-icons/fa6';
import Footer from '../../components/Footer';


const Contact = () => {
  return (
    <>
       <div
              className="relative bg-gray-800 pb-[110px] pt-[120px] lg:pt-[150px] px-4"
            >
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="w-full px-4">
                    <div className="hero-content">
                      <h1
                        className="mb-5 text-4xl text-center font-bold !leading-[1.208] text-yellow-600 sm:text-[42px] lg:text-[40px] xl:text-5xl"
                      >
                       Contact Us
                    
                        
                      </h1>
                      <p
                    className="mb-8 text-center text-xl text-body-color text-white"
                  >
                    We'd love to hear from you. Kindly reach out to us using any of the medium and we will be sure to get back to you
                    
    
                  </p>
                     
                      
                      
                    </div>
                  </div>
                  
                 
                </div>
              </div>
            </div>
       <section
      class="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px] dark:bg-dark px-5"
    >
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap lg:justify-between">
          <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div class="mb-12 max-w-[570px] lg:mb-0">
              <span class="mb-4 block text-base font-semibold text-yellow-600">
                Contact Us
              </span>
              <h2
                class="mb-6 text-[28px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]"
              >
                GET IN TOUCH WITH US
              </h2>
              

              

              <div class="mb-8 flex w-full max-w-[370px]">
                <div
                  class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]"
                >
                 <FaPhone className='text-[20px] text-yellow-600' />
                </div>
                <div class="w-full">
                  <h4 class="mb-1 text-xl font-bold text-dark">
                    Phone Number
                  </h4>
                  <p class="text-xl text-body-color dark:text-dark-6">
                    (+62)81 414 257 9980
                  </p>
                </div>
              </div>

              <div class="mb-8 flex w-full max-w-[370px]">
                <div
                  class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]"
                >
                 <FaEnvelope className='text-[20px] text-yellow-600' />
                </div>
                <div class="w-full">
                  <h4 class="mb-1 text-xl font-bold text-dark">
                    Email Address
                  </h4>
                  <p class="text-xl text-body-color dark:text-dark-6">
                    info@securepegawin.com
                  </p>
                </div>
              </div>
              <div class="mb-8 flex w-full">
                
                <div class="w-full flex flex-row space-x-4">
                  <a href='#'><FaFacebook className='text-[20px] text-gray-600' /></a><a href='#'><FaInstagram className='text-[20px] text-gray-600' /></a><a href='#'><FaX className='text-[20px] text-gray-600' /></a><a href='#'><FaLinkedin className='text-[20px] text-gray-600' /></a>
                 
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div
              class="relative rounded-lg from-gray-800 via-transparent to-gray-900 p-8 shadow-lg sm:p-12 dark:bg-dark-2"
            >
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    class="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    class="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    class="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    class="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full rounded border border-primary bg-yellow-600 p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div>
                <span class="absolute -right-9 -top-10 z-[-1]">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    </>
  )
}

export default Contact
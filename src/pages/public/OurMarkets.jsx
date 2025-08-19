import React from 'react'
import MarketData from '../../components/MarketData'
import ForexData from '../../components/ForexData'

const OurMarkets = () => {
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
                       Our Markets
                    
                        
                      </h1>
                     
                     
                      
                      
                    </div>
                  </div>
                  
                 
                </div>
              </div>
            </div>
            <div
              className="relative bg-gray-900 pb-[110px] pt-[120px] lg:pt-[150px] px-4"
            >
             <MarketData />
             <ForexData />
            </div>
    </>
  )
}

export default OurMarkets
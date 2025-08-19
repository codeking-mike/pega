import React from 'react';
import Hero from '../../components/Hero';
import FeaturesSection from '../../components/FeaturesSection';
import Howitworks from '../../components/Howitworks';
import Footer from '../../components/Footer';
import Calltoaction from '../../components/Calltoaction';
import MarketData from '../../components/MarketData';

const Home = () => {
  return (
    <>
       <Hero />
        <FeaturesSection />
        <Howitworks />
        <Calltoaction />

        <div
              className="relative bg-gray-900 pb-[110px] pt-[120px] lg:pt-[150px] px-4"
            >

         <MarketData />
            </div>
        
        <Footer />
    </>
    
  )
}

export default Home
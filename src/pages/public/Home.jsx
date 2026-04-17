import React from 'react';
import Hero from '../../components/Hero';
import FeaturesSection from '../../components/FeaturesSection';
import Howitworks from '../../components/Howitworks';
import Footer from '../../components/Footer';
import Calltoaction from '../../components/Calltoaction';
//import MarketData from '../../components/MarketData';

const Home = () => {
  return (
    <>
       <Hero />
        <FeaturesSection />
        <Howitworks />
        <Calltoaction />

        

         {/* <MarketData /> */}
            
        
        <Footer />
    </>
    
  )
}

export default Home
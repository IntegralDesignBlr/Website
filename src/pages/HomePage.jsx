import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
// import ClientsSection from '../components/ClientsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      {/* <ClientsSection /> */}
    </>
  );
};

export default HomePage;
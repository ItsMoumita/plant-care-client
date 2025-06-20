import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Footer from '../Component/Footer';
import ServicesSection from '../Component/ServicesSection';
import FaqSection from '../Component/FaqSection';
import NewPlants from '../Component/NewPlants';
import { Helmet } from 'react-helmet';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
       <Helmet>
         <title>Plant Care | Home</title>
       </Helmet>
      <Navbar />
      <div><Hero /></div>
      <div ><NewPlants /></div>
      <div data-aos="zoom-in"><ServicesSection /></div>
      <div data-aos="fade-up"><FaqSection /></div>
      <Footer />
    </div>
  );
};

export default Home;








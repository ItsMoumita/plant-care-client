import React from 'react';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import Footer from '../Component/Footer';
import ServicesSection from '../Component/ServicesSection';
import FaqSection from '../Component/FaqSection';
import NewPlants from '../Component/NewPlants';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <NewPlants></NewPlants>
            <ServicesSection></ServicesSection>
            <FaqSection></FaqSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
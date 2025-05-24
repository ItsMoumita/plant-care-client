import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" w-full mx-auto mt-22">

      {/* Carousel */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        dynamicHeight={false}
        className="rounded-sm shadow-lg overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="h-[80vh]">
          <img
            src="https://www.younghouselove.com/wp-content/uploads//2024/04/Goden-Vs-Neon-Vs-Marble-Pothos-Leaves-1024x688.jpg"
            alt="Slide 1"
            className="h-full w-full"
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://www.younghouselove.com/wp-content/uploads//2024/04/Marble-Queen-Vs-Golden-Vs-Neon-Pothos-Guide-1024x723.jpg"
            alt="Slide 2"
            className="h-full w-full "
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://nouveauraw.com/wp-content/uploads/2020/02/neon-pothos.png"
            alt="Slide 3"
            className="h-full w-full"
          />
        </div>
         <div className="h-[80vh]">
          <img
            src="https://www.younghouselove.com/wp-content/uploads//2024/04/Marble-Queen-Vs-Golden-Pothos-Leaves-1024x778.jpg"
            alt="Slide 4"
            className="h-full w-full "
          />
        </div>
         <div className="h-[80vh]">
          <img
            src="https://www.gardenia.net/wp-content/uploads/2024/02/shutterstock_1939163317.jpg"
            alt="Slide 5"
            className="h-full w-full "
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import plantAnimation from "../assets/plant-care.json"; 

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
     <div className="w-full mx-auto mt-22 bg-[#b6ffb6]/70 dark:bg-[#b6ffb6]/50">
      <div
        className="flex flex-col lg:flex-row gap-6 items-center"
        data-aos="zoom-in"
      >
        {/* Carousel - 70% */}
        <div className="w-full lg:w-[70%] h-[80vh]">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={2500}
            showStatus={false}
            dynamicHeight={false}
            className="shadow-lg overflow-hidden"
          >
            {[
              "https://www.younghouselove.com/wp-content/uploads//2024/04/Goden-Vs-Neon-Vs-Marble-Pothos-Leaves-1024x688.jpg",
              "https://salisburygreenhouse.com/wp-content/uploads/Second-Year-Gardening-Tips-main-sherwood-park.jpg",
              "https://nouveauraw.com/wp-content/uploads/2020/02/neon-pothos.png",
              "https://www.younghouselove.com/wp-content/uploads//2024/04/Marble-Queen-Vs-Golden-Pothos-Leaves-1024x778.jpg",
              "https://www.gardenia.net/wp-content/uploads/2024/02/shutterstock_1939163317.jpg",
            ].map((img, idx) => (
              <div key={idx} className="h-[80vh]">
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Content - 30% */}
        <div
          className="w-full lg:w-[30%] flex flex-col items-center text-center lg:text-left space-y-6 px-4"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold text-green-800 dark:text-[#b6ffb6]/90">
            Nurture Nature at Home
          </h2>
          <p className="text-[rgba(6,64,43,0.7)] dark:text-[#b6ffb6]/70 text-base">
            Explore a variety of plants, each with care tips to help you keep them thriving. From low-light options to tropical wonders – find your green companion.
          </p>

          {/* Plant Care Tips */}
          <ul className="text-sm text-left text-green-900 bg-white/70 p-4 rounded-md shadow-md space-y-2">
            <li>🌿 Water when the top inch of soil is dry.</li>
            <li>☀️ Give bright, indirect light for most indoor plants.</li>
            <li>🍃 Wipe leaves to remove dust and help photosynthesis.</li>
            <li>🪴 Repot every 1–2 years for healthy root growth.</li>
            <li>🐛 Check for pests regularly, especially under leaves.</li>
          </ul>

          {/* Lottie Animation */}
          <div className="w-60 h-60 mx-auto lg:mx-0">
            <Lottie animationData={plantAnimation} loop autoplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

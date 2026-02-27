// src/components/Hero/Hero.jsx

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full text-white overflow-hidden">
      
      {/* Background Image Wrapper */}
      <div className="absolute inset-0">

        {/* Mobile Background */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-center filter grayscale"
          style={{
            backgroundImage: "url('/assets/mobHeroImg.jpg')",
          }}
        ></div>

        {/* Desktop Background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-[center_20%] filter grayscale"
          style={{
            backgroundImage: "url('/assets/deskHeroImg.png')",
          }}
        ></div>

        {/* Mobile Grey Gradient Overlay (Soft Shadow From Bottom) */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 md:hidden 
                     bg-gradient-to-t 
                     from-[#1c1c1c]/100 
                     via-[#1c1c1c]/90 
                     to-transparent"
        ></div>

      </div>

      {/* Content */}
      <div
        className="
          relative z-10 h-full flex
          items-end md:items-center
          justify-center md:justify-start
          px-6 md:px-20
          pb-10 md:pb-0
          text-center md:text-left
        "
      >
        <div className="max-w-3xl">
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-serif mb-3">
            Debapriya Adhikary
          </h1>

          <p className="text-base sm:text-lg md:text-xl tracking-wide mb-4 text-gray-300">
            Hindustani Classical Vocalist | Educator | Filmmaker | Cultural Ambassador
          </p>

          <a
            href="#about"
            className="inline-block border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Explore My Work
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;